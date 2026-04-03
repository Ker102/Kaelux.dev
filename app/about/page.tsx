import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Kaelux | AI Engineering Agency — Who We Are",
    description:
        "Kaelux is a global AI engineering agency founded by Kristofer Jussmann. We build custom LLM systems, RAG pipelines, intelligent workflow agents, and production-ready web infrastructure for businesses worldwide. Not a YouTube channel — an engineering firm.",
    keywords: [
        "Kaelux",
        "Kaelux AI",
        "Kaelux.dev",
        "Kaelux agency",
        "AI engineering agency",
        "Kristofer Jussmann",
        "who is Kaelux",
        "about Kaelux",
        "custom LLM systems",
        "RAG pipelines",
        "AI automation agency",
    ],
    openGraph: {
        title: "About Kaelux — AI Engineering Agency",
        description:
            "Kaelux is an AI engineering agency building custom LLM systems, RAG pipelines, and intelligent automation for businesses worldwide.",
        type: "website",
        url: "https://kaelux.dev/about",
        siteName: "Kaelux AI Engineering",
        images: [
            {
                url: "https://kaelux.dev/kaelux-icon-v2.png",
                width: 512,
                height: 512,
                alt: "Kaelux – AI Engineering Agency Logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "About Kaelux | AI Engineering Agency",
        description:
            "Kaelux is an AI engineering agency building custom LLM systems, RAG pipelines, and intelligent automation for businesses worldwide.",
        images: ["https://kaelux.dev/kaelux-icon-v2.png"],
    },
    alternates: {
        canonical: "https://kaelux.dev/about",
    },
};

export default function AboutPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Kaelux",
            url: "https://kaelux.dev/about",
            mainEntity: {
                "@type": ["Organization", "ProfessionalService"],
                name: "Kaelux",
                alternateName: [
                    "Kaelux.dev",
                    "Kaelux AI Engineering",
                    "Kaelux Agency",
                ],
                url: "https://kaelux.dev",
                logo: "https://kaelux.dev/kaelux-icon-v2.png",
                description:
                    "Kaelux is a global AI engineering agency that builds custom LLM systems, RAG pipelines, intelligent workflow agents, and production-ready web infrastructure for businesses worldwide.",
                areaServed: "Worldwide",
                knowsAbout: [
                    "Artificial Intelligence",
                    "Large Language Models (LLMs)",
                    "Retrieval-Augmented Generation (RAG)",
                    "Intelligent Automation",
                    "Full-Stack Web Development",
                    "Next.js",
                    "Cloud Infrastructure",
                    "AI Agent Development",
                ],
                founder: {
                    "@type": "Person",
                    name: "Kristofer Jussmann",
                    jobTitle: "Founder & Lead Engineer",
                    url: "https://github.com/Ker102",
                },
                sameAs: [
                    "https://github.com/Ker102",
                    "https://instagram.com/kaelux.dev",
                    "https://x.com/kerprocessing",
                ],
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
