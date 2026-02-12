import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Infrastructure Services | Kaelux",
    description:
        "Scalable hosting solutions with managed databases, CDN, and automated deployments. Your infrastructure, handled by experts.",
    keywords: ["cloud infrastructure", "AWS", "GCP", "Azure", "DevOps", "cloud hosting", "Kaelux"],
    openGraph: {
        title: "Cloud Infrastructure Services | Kaelux",
        description: "Scalable hosting solutions with managed databases, CDN, and automated deployments.",
        type: "website",
        url: "https://kaelux.dev/services/cloud-infrastructure",
    },
    alternates: {
        canonical: "https://kaelux.dev/services/cloud-infrastructure",
    },
};

export default function CloudInfrastructurePage() {
    return <ServicePageLayout slug="cloud-infrastructure" />;
}
