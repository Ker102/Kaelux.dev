import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kaelux.dev";
  const now = new Date();

  return [
    // ── Main Pages ──────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/openclaw`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/diagnoser`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Service Pages ───────────────────────────────────────────
    {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/full-stack-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/cloud-infrastructure`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/continuous-delivery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Wiki / Knowledge Base ───────────────────────────────────
    {
      url: `${baseUrl}/wiki`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/wiki/agentic-ai-workflows`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/wiki/ai-hallucination-prevention`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/wiki/openclaw-cloud-hosting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/wiki/rag-security-compliance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/wiki/small-language-models`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/wiki/structured-generation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
