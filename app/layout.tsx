import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaelux | AI Systems, Platforms, and Infrastructure",
  description: "Kaelux builds AI systems, software platforms, and production infrastructure for businesses. From retrieval pipelines and agentic workflows to IaaS, PaaS, and SaaS delivery, we ship systems built to keep pace with fast-moving technology.",
  keywords: ["AI engineering company", "custom AI systems", "AI automation", "RAG pipelines", "workflow agents", "AI infrastructure", "IaaS", "PaaS", "SaaS", "enterprise AI", "platform engineering"],
  authors: [{ name: "Kaelux" }],
  creator: "Kaelux",
  publisher: "Kaelux",
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
    title: "Kaelux | AI Systems, Platforms, and Infrastructure",
    description: "Kaelux builds AI systems, software platforms, and production infrastructure for businesses across IaaS, PaaS, and SaaS.",
    type: "website",
    url: "https://kaelux.dev",
    siteName: "Kaelux",
    images: [
      {
        url: "https://kaelux.dev/kaelux-icon-v3.png",
        width: 512,
        height: 512,
        alt: "Kaelux – AI Systems, Platforms, and Infrastructure",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kaelux | AI Systems, Platforms, and Infrastructure",
    description: "AI systems, platform engineering, and production infrastructure for businesses across IaaS, PaaS, and SaaS.",
    images: ["https://kaelux.dev/kaelux-icon-v3.png"],
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
      "alternateName": ["Kaelux.dev", "Kaelux Infrastructure", "Kaelux Platform Engineering"],
      "url": "https://kaelux.dev",
      "logo": "https://kaelux.dev/kaelux-icon-v3.png",
      "image": "https://kaelux.dev/kaelux-icon-v3.png",
      "description": "Kaelux builds AI systems, software platforms, and production infrastructure for businesses worldwide.",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Artificial Intelligence",
        "Large Language Models (LLMs)",
        "Intelligent Automation",
        "Retrieval-Augmented Generation (RAG)",
        "Cloud Infrastructure",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)"
      ],
      "founder": {
        "@type": "Person",
        "name": "Kristofer Jussmann"
      },
      "sameAs": [
        "https://github.com/Ker102",
        "https://instagram.com/kaelux.dev",
        "https://x.com/ker102dev",
        "https://www.linkedin.com/company/kaelux-dev/"
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
