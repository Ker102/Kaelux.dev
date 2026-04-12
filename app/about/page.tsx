import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Kaelux | AI, Infrastructure, and Platform Engineering",
    description:
        "Learn what Kaelux is: an engineering and platform company founded by Kristofer Jussmann in Estonia that builds AI systems, managed infrastructure, and software platforms across IaaS, PaaS, and SaaS.",
    keywords: [
        "Kaelux",
        "Kaelux AI",
        "Kaelux.dev",
        "Kaelux infrastructure",
        "Kaelux platform engineering",
        "AI engineering company",
        "Kristofer Jussmann",
        "who is Kaelux",
        "about Kaelux",
        "IaaS provider",
        "PaaS engineering",
        "SaaS development",
        "custom AI systems",
        "enterprise AI infrastructure",
    ],
    authors: [{ name: "Kaelux" }, { name: "Kristofer Jussmann" }],
    creator: "Kaelux",
    publisher: "Kaelux",
    openGraph: {
        title: "About Kaelux | AI, Infrastructure, and Platform Engineering",
        description:
            "Kaelux is an engineering and platform company founded by Kristofer Jussmann, focused on AI systems, managed infrastructure, and software platforms.",
        type: "website",
        url: "https://kaelux.dev/about",
        siteName: "Kaelux",
        images: [
            {
                url: "https://kaelux.dev/kaelux-icon-v3.png",
                width: 512,
                height: 512,
                alt: "Kaelux – AI Engineering Agency Logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "About Kaelux | AI, Infrastructure, and Platform Engineering",
        description:
            "Kaelux builds AI systems, managed infrastructure, and software platforms across IaaS, PaaS, and SaaS.",
        images: ["https://kaelux.dev/kaelux-icon-v3.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://kaelux.dev/about",
    },
};

export default function AboutPage() {
    const faqEntities = [
        {
            "@type": "Question",
            name: "What is Kaelux?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux is an engineering and platform company that builds AI systems, managed infrastructure, internal platforms, and software products for businesses.",
            },
        },
        {
            "@type": "Question",
            name: "Who founded Kaelux?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux was founded by Kristofer Jussmann, an Estonia-based agentic systems architect and cloud engineer focused on production-grade AI and infrastructure delivery.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of work does Kaelux do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux delivers production AI systems, retrieval infrastructure, agentic automation, managed cloud environments, and platform offerings across IaaS, PaaS, and SaaS.",
            },
        },
        {
            "@type": "Question",
            name: "Is Kaelux a software company or a content channel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux is an engineering company and product builder, not a media or entertainment channel.",
            },
        },
    ];

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Kaelux",
            url: "https://kaelux.dev/about",
            description:
                "About page for Kaelux, an engineering and platform company founded by Kristofer Jussmann.",
            mainEntity: {
                "@type": ["Organization", "ProfessionalService"],
                name: "Kaelux",
                alternateName: [
                    "Kaelux.dev",
                    "Kaelux Infrastructure",
                    "Kaelux Platform Engineering",
                ],
                url: "https://kaelux.dev",
                logo: "https://kaelux.dev/kaelux-icon-v3.png",
                description:
                    "Kaelux is an engineering and platform company that builds AI systems, managed infrastructure, platform layers, and software products for businesses worldwide.",
                areaServed: "Worldwide",
                knowsAbout: [
                    "Artificial Intelligence",
                    "Large Language Models (LLMs)",
                    "Retrieval-Augmented Generation (RAG)",
                    "Intelligent Automation",
                    "Cloud Infrastructure",
                    "Infrastructure as a Service (IaaS)",
                    "Platform as a Service (PaaS)",
                    "Software as a Service (SaaS)",
                    "AI Agent Development",
                    "Distributed Systems",
                    "Enterprise Software Architecture",
                ],
                founder: {
                    "@type": "Person",
                    name: "Kristofer Jussmann",
                    jobTitle: "Founder and Lead Engineer",
                    url: "https://github.com/Ker102",
                },
                sameAs: [
                    "https://github.com/Ker102",
                    "https://instagram.com/kaelux.dev",
                    "https://x.com/ker102dev",
                    "https://www.linkedin.com/company/kaelux-dev/",
                ],
                mainEntityOfPage: "https://kaelux.dev/about",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://kaelux.dev",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "About",
                    item: "https://kaelux.dev/about",
                },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntities,
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutPageClient />
        </>
    );
}
