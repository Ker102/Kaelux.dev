import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Continuous Delivery Services | Kaelux",
    description:
        "CI/CD pipelines, monitoring, and maintenance to keep your platform running smoothly. Automate your entire delivery pipeline.",
    keywords: ["CI/CD", "continuous delivery", "DevOps", "automation", "deployment pipeline", "Kaelux"],
    openGraph: {
        title: "Continuous Delivery Services | Kaelux",
        description: "CI/CD pipelines, monitoring, and maintenance to keep your platform running smoothly.",
        type: "website",
        url: "https://kaelux.dev/services/continuous-delivery",
    },
    alternates: {
        canonical: "https://kaelux.dev/services/continuous-delivery",
    },
};

export default function ContinuousDeliveryPage() {
    return <ServicePageLayout slug="continuous-delivery" />;
}
