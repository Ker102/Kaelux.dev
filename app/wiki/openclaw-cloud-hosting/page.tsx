import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Self-hosted vs. Cloud: The OpenClaw Deployment Guide | Kaelux Wiki",
    description: "Compare self-hosting OpenClaw on a Mac Mini vs. managed cloud deployment. Understand the security, cost, and operational trade-offs.",
    keywords: ["openclaw hosting", "openclaw cloud", "openclaw self-hosted", "openclaw mac mini", "openclaw deployment", "AI agent hosting", "Kaelux"],
    openGraph: {
        title: "OpenClaw: Self-hosted vs. Cloud Deployment | Kaelux",
        description: "The definitive guide to deploying OpenClaw — self-hosted vs. cloud-managed.",
        type: "article",
        url: "https://kaelux.dev/wiki/openclaw-cloud-hosting",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/openclaw-cloud-hosting",
    },
};

const comparisonData = {
    headers: ["Aspect", "Self-Hosted (Mac Mini)", "Cloud-Managed (Kaelux)"],
    rows: [
        [
            "Upfront Cost",
            "$599+ for hardware (Mac Mini M4), plus peripherals, networking, and UPS for power backup.",
            "$0 upfront. Monthly subscription starts at $29/mo with no hardware investment.",
        ],
        [
            "Security",
            "Your responsibility. Requires manual firewall configuration, SSL setup, network segmentation, and ongoing patching.",
            "Enterprise-grade isolation, encrypted connections, automated security patches, and role-based access controls from day one.",
        ],
        [
            "Uptime & Reliability",
            "Dependent on home/office internet and power. No SLA, no redundancy, no automatic failover.",
            "99.9% uptime SLA. Auto-restarts, health monitoring, and cloud-provider redundancy built in.",
        ],
        [
            "Scaling",
            "Linear — each additional instance requires purchasing another Mac Mini. Physical space and power become constraints.",
            "On-demand — spin up new instances in minutes. No physical hardware limits.",
        ],
        [
            "Maintenance",
            "Manual updates, OpenClaw version upgrades, OS patches, dependency management — all on you.",
            "Fully managed. We handle all updates, patches, and version upgrades with zero-downtime deployments.",
        ],
        [
            "Setup Time",
            "Hours to days. Requires DevOps knowledge: Docker, SSL, reverse proxies, API key management, messaging platform integrations.",
            "Days, not weeks. We configure everything: integrations, SSL, monitoring, and hand you a working instance.",
        ],
        [
            "LLM Flexibility",
            "Full control. You bring your own API keys for Claude, GPT, DeepSeek, or local models.",
            "Same full control. You bring your own API keys — we just manage the infrastructure around them.",
        ],
        [
            "Best For",
            "Tinkerers and developers who enjoy managing infrastructure and want maximum control over every layer.",
            "Teams and individuals who want a production-ready AI agent without the operational overhead.",
        ],
    ],
};

export default function OpenClawCloudHostingPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="Self-hosted vs. Cloud: The OpenClaw Deployment Guide"
                description="A practical comparison of running OpenClaw on your own hardware versus a managed cloud deployment."
                slug="openclaw-cloud-hosting"
            >
                {/* What is OpenClaw */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">What is OpenClaw?</h2>
                    <p>
                        OpenClaw is a free, open-source autonomous AI agent built in TypeScript and Swift.
                        It connects to messaging platforms like WhatsApp, Telegram, and Discord, and uses LLM APIs
                        (Claude, GPT, DeepSeek) or local models to execute real-world tasks — including browser
                        automation, file management, and shell commands. It&apos;s powerful, flexible, and growing
                        fast in popularity.
                    </p>
                </section>

                {/* The Deployment Decision */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">The Deployment Decision</h2>
                    <p>
                        Most OpenClaw users start by self-hosting on a Mac Mini or similar hardware.
                        While this works for experimentation, production use cases quickly expose the
                        limitations of home-based infrastructure: unreliable uptime, security gaps,
                        manual maintenance, and hidden costs. Cloud-managed deployments solve these
                        challenges while preserving full control over your AI agent.
                    </p>
                </section>

                <BrandCallout>
                    <strong>Kaelux.dev</strong> offers fully managed OpenClaw cloud hosting — deploying,
                    securing, and maintaining your AI agent on production-grade infrastructure (GCP, Azure,
                    or DigitalOcean) so you can focus on using it, not running it.
                </BrandCallout>

                <WikiTable
                    headers={comparisonData.headers}
                    rows={comparisonData.rows}
                    caption="Comparison based on typical deployment patterns observed by Kaelux engineering."
                />

                {/* Security Deep Dive */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Security Considerations</h2>
                    <p className="mb-4">
                        OpenClaw is uniquely powerful — it can access your file system, browser, and terminal.
                        This makes security configuration non-negotiable for any serious deployment. A misconfigured
                        instance exposed to the internet is a critical vulnerability.
                    </p>
                    <p>
                        Cloud-managed deployments include network isolation, strict firewall rules, encrypted
                        connections (SSL/TLS), role-based access controls, and automated security patching by default.
                        Self-hosted deployments require the operator to configure all of these manually and keep them
                        updated as OpenClaw evolves.
                    </p>
                </section>

                {/* When to Self-Host */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">When Self-Hosting Makes Sense</h2>
                    <p>
                        Self-hosting is a good choice if you&apos;re a developer who enjoys managing infrastructure,
                        want to run local LLM models on dedicated GPU hardware, need air-gapped deployments for
                        compliance reasons, or are purely experimenting and don&apos;t need production-grade uptime.
                    </p>
                </section>

                {/* When to Go Cloud */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">When Cloud-Managed is Better</h2>
                    <p>
                        Cloud-managed hosting is the right call when you need reliable 24/7 uptime, can&apos;t
                        justify the hardware cost, want enterprise-grade security without the setup burden,
                        need to scale to multiple instances, or simply want your AI agent running without
                        the operational overhead.
                    </p>
                </section>

                <BrandCallout>
                    Whether you&apos;re a solo developer or a growing team, <strong>Kaelux.dev</strong> makes
                    OpenClaw production-ready. Visit <a href="/openclaw" className="text-violet-400 hover:text-violet-300 underline">kaelux.dev/openclaw</a> to
                    explore managed hosting plans starting at $29/mo.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
