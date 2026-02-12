import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UI/UX Design Services | Kaelux",
    description:
        "Modern, responsive interfaces designed for optimal user experience and engagement. From wireframes to pixel-perfect production designs.",
    keywords: ["UI/UX design", "web design", "user experience", "responsive design", "design system", "Kaelux"],
    openGraph: {
        title: "UI/UX Design Services | Kaelux",
        description: "Modern, responsive interfaces designed for optimal user experience and engagement.",
        type: "website",
        url: "https://kaelux.dev/services/ui-ux-design",
    },
    alternates: {
        canonical: "https://kaelux.dev/services/ui-ux-design",
    },
};

export default function UIUXDesignPage() {
    return <ServicePageLayout slug="ui-ux-design" />;
}
