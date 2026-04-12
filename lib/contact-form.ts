export type ContactPayload = {
    source: string;
    name: string;
    email: string;
    company?: string;
    plan?: string;
    message?: string;
    details?: string;
};

export async function submitContactForm(payload: ContactPayload) {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

    if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
    }

    return data;
}
