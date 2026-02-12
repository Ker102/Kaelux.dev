import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Full-Stack Development Services | Kaelux",
    description:
        "End-to-end application development with robust backends and polished frontends. We build fast, scalable, and maintainable software.",
    keywords: ["full-stack development", "web development", "React", "Next.js", "Node.js", "API development", "Kaelux"],
    openGraph: {
        title: "Full-Stack Development Services | Kaelux",
        description: "End-to-end application development with robust backends and polished frontends.",
        type: "website",
        url: "https://kaelux.dev/services/full-stack-development",
    },
    alternates: {
        canonical: "https://kaelux.dev/services/full-stack-development",
    },
};

export default function FullStackDevelopmentPage() {
    return <ServicePageLayout slug="full-stack-development" />;
}
