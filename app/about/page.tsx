import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Kaelux | Research and Engineering Lab",
    description:
        "Meet Kaelux, a collaborative research and engineering lab building useful tools with researchers, developers, and domain experts.",
    keywords: [
        "Kaelux",
        "Kaelux.dev",
        "Kaelux projects",
        "AI research lab",
        "ML engineering",
        "AI product lab",
        "Kristofer Jussmann",
        "who is Kaelux",
        "about Kaelux",
        "MedAI",
        "ViperMesh",
        "Harneloop",
        "PromptTriage",
        "Nullstate",
    ],
    authors: [{ name: "Kaelux" }, { name: "Kristofer Jussmann" }],
    creator: "Kaelux",
    publisher: "Kaelux",
    openGraph: {
        title: "About Kaelux | Research and Engineering Lab",
        description:
            "Kaelux is an Estonia-based collaborative lab working on real problems through research, open-source tools, and practical engineering.",
        type: "website",
        url: "https://kaelux.dev/about",
        siteName: "Kaelux",
        images: [
            {
                url: "https://kaelux.dev/kaelux-icon-v3.png",
                width: 512,
                height: 512,
                alt: "Kaelux AI research lab logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "About Kaelux | Research and Engineering Lab",
        description:
            "Research, open-source tools, practical products, and collaboration by Kaelux.",
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
                text: "Kaelux is an Estonia-based collaborative research and engineering lab behind MedAI, ViperMesh, Harneloop, PromptTriage, Nullstate, and OpenCoast.",
            },
        },
        {
            "@type": "Question",
            name: "Who founded Kaelux?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux was founded by Kristofer Jussmann, an Estonia-based AI/ML systems researcher and builder.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of work does Kaelux do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux works with collaborators to solve real problems through research, open-source tools, practical products, and business automation.",
            },
        },
        {
            "@type": "Question",
            name: "Is Kaelux a software company or a content channel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kaelux builds useful software, publishes open-source work, and collaborates with researchers, developers, domain experts, and business clients.",
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
                "About page for Kaelux, the AI and ML research lab founded by Kristofer Jussmann in Estonia.",
            mainEntity: {
                "@type": "Organization",
                name: "Kaelux",
                alternateName: [
                    "Kaelux.dev",
                    "Kaelux Research Lab",
                    "Kaelux Ventures",
                ],
                url: "https://kaelux.dev",
                logo: "https://kaelux.dev/kaelux-icon-v3.png",
                description:
                    "Kaelux is an Estonia-based collaborative research and engineering lab behind MedAI, ViperMesh, Harneloop, PromptTriage, Nullstate, and OpenCoast.",
                areaServed: "Worldwide",
                knowsAbout: [
                    "Artificial Intelligence",
                    "Machine Learning Research",
                    "Large Language Models (LLMs)",
                    "Agent Harness Engineering",
                    "Spatial Reasoning",
                    "AI Venture Building",
                    "Medical AI Research Tooling",
                    "Creative AI Tooling",
                    "Prompt Engineering",
                    "Infrastructure Security",
                    "Agentic Systems",
                ],
                founder: {
                    "@type": "Person",
                    name: "Kristofer Jussmann",
                    jobTitle: "Founder",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <AboutPageClient />
        </>
    );
}
