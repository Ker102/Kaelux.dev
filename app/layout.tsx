import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./mobile.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import MotionPreferences from "@/components/MotionPreferences";
import { coreVentures } from "@/data/ventures";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaelux | Research, Tools, and Collaboration",
  description: "Kaelux is an Estonia-based collaborative lab solving real problems through research, open-source tools, practical products, and business automation.",
  keywords: ["Kaelux", "research lab", "ML engineering", "open-source tools", "secure business automation", "Baltics", "Kristofer Jussmann", "MedAI", "ViperMesh", "Harneloop", "PromptTriage", "Nullstate", "OpenCoast"],
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
    title: "Kaelux | Research, Tools, and Collaboration",
    description: "A collaborative research and engineering lab building useful tools and solving real problems from Estonia.",
    type: "website",
    url: "https://kaelux.dev",
    siteName: "Kaelux",
    images: [
      {
        url: "https://kaelux.dev/kaelux-icon-v3.png",
        width: 512,
        height: 512,
          alt: "Kaelux AI research lab",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kaelux | Research, Tools, and Collaboration",
    description: "Research, practical engineering, open-source tools, and collaboration on real problems.",
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
  const absoluteUrl = (href: string) =>
    href.startsWith("http") ? href : `https://kaelux.dev${href}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kaelux",
      "alternateName": ["Kaelux.dev", "Kaelux Research Lab", "Kaelux Ventures"],
      "url": "https://kaelux.dev",
      "logo": "https://kaelux.dev/kaelux-icon-v3.png",
      "image": "https://kaelux.dev/kaelux-icon-v3.png",
      "description": "Kaelux is an Estonia-based collaborative lab solving real problems through research, open-source tools, practical products, and business automation.",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning Research",
        "Collaborative Research and Engineering",
        "Agent Harness Engineering",
        "Spatial Reasoning",
        "Medical AI Research Tooling",
        "Agentic Workflows",
        "Business Automation Security",
        "Creative AI Tooling",
        "Prompt Engineering",
        "Infrastructure Security"
      ],
      "founder": {
        "@type": "Person",
        "name": "Kristofer Jussmann",
        "url": "https://github.com/Ker102"
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
      "@type": "Person",
      "name": "Kristofer Jussmann",
      "url": "https://github.com/Ker102",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Kaelux",
        "url": "https://kaelux.dev"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kaelux projects",
      "itemListElement": coreVentures.map((venture, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": venture.id === "medai" ? "Organization" : "SoftwareApplication",
          "name": venture.name,
          "url": absoluteUrl(venture.href),
          "description": venture.description,
          "applicationCategory": venture.category
        }
      }))
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <MotionPreferences>{children}</MotionPreferences>
        </ThemeProvider>
      </body>
    </html>
  );
}
