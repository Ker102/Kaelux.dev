import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaelux | AI Engineering Agency — Custom LLM & Automation Solutions",
  description: "Kaelux is an AI engineering agency building custom LLM systems, intelligent automation, and production-ready web infrastructure for businesses. From RAG pipelines to workflow agents—we engineer AI that works.",
  keywords: ["AI engineering agency", "custom LLM solutions", "AI automation", "RAG pipelines", "workflow agents", "AI infrastructure", "full-stack development", "Next.js", "React", "TypeScript", "enterprise AI", "intelligent automation"],
  authors: [{ name: "Kaelux" }],
  metadataBase: new URL('https://kaelux.dev'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/logo.png' },
    ],
  },
  openGraph: {
    title: "Kaelux | AI Engineering Agency — Custom LLM & Automation Solutions",
    description: "Kaelux is an AI engineering agency building custom LLM systems, intelligent automation, and production-ready web infrastructure for businesses.",
    type: "website",
    url: "https://kaelux.dev",
    siteName: "Kaelux AI Engineering",
    images: [
      {
        url: "https://kaelux.dev/kaelux-icon-v2.png",
        width: 512,
        height: 512,
        alt: "Kaelux – AI Engineering Agency",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kaelux | AI Engineering Agency",
    description: "Custom LLM systems, intelligent automation, and production-ready AI infrastructure for businesses.",
    images: ["https://kaelux.dev/kaelux-icon-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kaelux.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "name": "Kaelux",
      "alternateName": ["Kaelux.dev", "Kaelux AI Engineering", "Kaelux Agency"],
      "url": "https://kaelux.dev",
      "logo": "https://kaelux.dev/kaelux-icon-v2.png",
      "image": "https://kaelux.dev/kaelux-icon-v2.png",
      "description": "AI engineering agency building custom LLM systems, intelligent automation, and production-ready web infrastructure for businesses worldwide.",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Artificial Intelligence",
        "Large Language Models (LLMs)",
        "Intelligent Automation",
        "Retrieval-Augmented Generation (RAG)",
        "Full-Stack Web Development",
        "Next.js"
      ],
      "founder": {
        "@type": "Person",
        "name": "Kristofer Jussmann"
      },
      "sameAs": [
        "https://github.com/Ker102",
        "https://instagram.com/kaelux.dev",
        "https://x.com/kerprocessing"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kaelux",
      "url": "https://kaelux.dev",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://kaelux.dev/wiki?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Kaelux?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kaelux is a global AI engineering agency (kaelux.dev) that builds custom LLM systems, RAG pipelines, intelligent automation agents, and production-ready web infrastructure for businesses worldwide. It was founded by Kristofer Jussmann."
          }
        },
        {
          "@type": "Question",
          "name": "What services does Kaelux offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kaelux offers custom LLM integration, Retrieval-Augmented Generation (RAG) pipelines, AI agent development, full-stack web development with Next.js and React, cloud infrastructure setup, UI/UX design, and managed OpenClaw AI hosting."
          }
        },
        {
          "@type": "Question",
          "name": "Who founded Kaelux?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kaelux was founded by Kristofer Jussmann, a full-stack engineer and AI researcher specializing in retrieval-augmented generation, multi-model architectures, and scalable cloud infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "Is Kaelux a YouTube channel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Kaelux (kaelux.dev) is an AI engineering agency, not a YouTube channel. The agency builds custom AI systems and web infrastructure for businesses globally."
          }
        }
      ]
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
