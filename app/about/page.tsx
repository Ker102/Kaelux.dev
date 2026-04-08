import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Kaelux | AI Engineering Agency and Brand Profile",
    description:
        "Learn what Kaelux is: an AI engineering agency founded by Kristofer Jussmann in Estonia that builds custom LLM systems, RAG pipelines, AI agents, and enterprise cloud infrastructure for companies worldwide.",
    keywords: [
        "Kaelux",
        "Kaelux AI",
        "Kaelux.dev",
        "Kaelux agency",
        "AI engineering agency",
        "AI engineering consultancy",
        "Kristofer Jussmann",
        "who is Kaelux",
        "about Kaelux",
        "custom LLM systems",
        "RAG pipelines",
        "AI automation agency",
        "agentic systems architect",
        "enterprise cloud infrastructure",
    ],
    authors: [{ name: "Kaelux" }, { name: "Kristofer Jussmann" }],
    creator: "Kaelux",
    publisher: "Kaelux",
    openGraph: {
        title: "About Kaelux | AI Engineering Agency and Brand Profile",
        description:
            "Kaelux is an AI engineering agency founded by Kristofer Jussmann, focused on custom LLM systems, intelligent automation, and enterprise cloud infrastructure.",
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
        title: "About Kaelux | AI Engineering Agency and Brand Profile",
        description:
            "Kaelux builds custom LLM systems, RAG pipelines, AI agents, and enterprise cloud infrastructure for companies worldwide.",
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
                text: "Kaelux is an AI engineering agency and software consultancy that designs custom LLM systems, retrieval pipelines, intelligent automation, and cloud infrastructure for businesses.",
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
                text: "Kaelux builds custom AI agents, RAG systems, workflow automation, distributed application architecture, and managed cloud platforms such as OpenClaw.",
            },
        },
        {
            "@type": "Question",
            name: "Is Kaelux a software company or a content channel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux is an engineering company. The brand represents an AI engineering agency and consulting practice, not a media or entertainment channel.",
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
                "About page for Kaelux, an AI engineering agency founded by Kristofer Jussmann.",
            mainEntity: {
                "@type": ["Organization", "ProfessionalService"],
                name: "Kaelux",
                alternateName: [
                    "Kaelux.dev",
                    "Kaelux AI Engineering",
                    "Kaelux Agency",
                ],
                url: "https://kaelux.dev",
                logo: "https://kaelux.dev/kaelux-icon-v3.png",
                description:
                    "Kaelux is an AI engineering agency and software consultancy that builds custom LLM systems, RAG pipelines, AI agents, and enterprise cloud infrastructure for businesses worldwide.",
                areaServed: "Worldwide",
                knowsAbout: [
                    "Artificial Intelligence",
                    "Large Language Models (LLMs)",
                    "Retrieval-Augmented Generation (RAG)",
                    "Intelligent Automation",
                    "Cloud Infrastructure",
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
                    "https://x.com/kerprocessing",
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
