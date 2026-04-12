import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
    source: z.string().trim().min(1).max(80),
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(320),
    company: z.string().trim().max(160).optional().or(z.literal("")),
    plan: z.string().trim().max(120).optional().or(z.literal("")),
    message: z.string().trim().max(6000).optional().or(z.literal("")),
    details: z.string().trim().max(6000).optional().or(z.literal("")),
});

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
    try {
        const raw = await request.json();
        const payload = contactSchema.parse(raw);

        if (!resend) {
            return NextResponse.json(
                {
                    error: "Contact email is not configured on the server.",
                },
                { status: 500 },
            );
        }

        const to = process.env.CONTACT_TO_EMAIL ?? "business@kaelux.dev";
        const from = process.env.CONTACT_FROM_EMAIL ?? `Kaelux <${to}>`;
        const inquiryBody = payload.message || payload.details || "No additional details provided.";
        const safeInquiryBody = escapeHtml(inquiryBody).replace(/\n/g, "<br />");

        const { error } = await resend.emails.send({
            to,
            from,
            replyTo: payload.email,
            subject: `[Kaelux] ${payload.source} inquiry from ${payload.name}`,
            text: [
                `Source: ${payload.source}`,
                `Name: ${payload.name}`,
                `Email: ${payload.email}`,
                `Company: ${payload.company || "Not provided"}`,
                `Plan: ${payload.plan || "Not provided"}`,
                "",
                "Inquiry details:",
                inquiryBody,
            ].join("\n"),
            html: `
                <h2>New Kaelux inquiry</h2>
                <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
                <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
                <p><strong>Company:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
                <p><strong>Plan:</strong> ${escapeHtml(payload.plan || "Not provided")}</p>
                <hr />
                <p><strong>Inquiry details</strong></p>
                <p>${safeInquiryBody}</p>
            `,
            tags: [
                { name: "source", value: payload.source.toLowerCase().replace(/[^a-z0-9_-]/g, "-").slice(0, 256) || "website" },
            ],
        });

        if (error) {
            console.error("Resend contact send error", error);
            return NextResponse.json(
                { error: "Failed to send message." },
                { status: 500 },
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Invalid form submission.", issues: error.issues },
                { status: 400 },
            );
        }

        console.error("Contact route error", error);
        return NextResponse.json(
            { error: "Failed to send message." },
            { status: 500 },
        );
    }
}
