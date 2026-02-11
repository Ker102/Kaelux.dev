import Navbar from "@/components/Navbar";
import OpenClawHero from "@/components/openclaw/OpenClawHero";
import OpenClawFeatures from "@/components/openclaw/OpenClawFeatures";
import OpenClawPricing from "@/components/openclaw/OpenClawPricing";
import OpenClawHowItWorks from "@/components/openclaw/OpenClawHowItWorks";
import OpenClawFAQ from "@/components/openclaw/OpenClawFAQ";
import OpenClawContact from "@/components/openclaw/OpenClawContact";
import SolutionsFooter from "@/components/solutions/SolutionsFooter";
import GradientSpacer from "@/components/sections/GradientSpacer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OpenClaw Cloud Hosting | Managed AI Agent Deployment | Kaelux",
    description: "Skip the Mac Mini. Kaelux deploys, secures, and manages your OpenClaw AI agent in production-grade cloud infrastructure. Always-on, zero headaches.",
    keywords: [
        "openclaw hosting",
        "openclaw cloud",
        "openclaw managed service",
        "openclaw without mac mini",
        "openclaw setup service",
        "openclaw enterprise deployment",
        "self-host openclaw alternative",
        "managed AI agent",
        "Kaelux",
    ],
    openGraph: {
        title: "OpenClaw Cloud Hosting | Kaelux",
        description: "Your OpenClaw AI agent, fully managed in the cloud. No hardware, no security headaches, no downtime.",
        type: "website",
        url: "https://kaelux.dev/openclaw",
    },
    alternates: {
        canonical: "https://kaelux.dev/openclaw",
    },
};

export default function OpenClawPage() {
    return (
        <main className="min-h-screen text-white selection:bg-violet-500/30">
            {/* Black background sections */}
            <div className="bg-black">
                <Navbar />
                <OpenClawHero />
                <OpenClawFeatures />
            </div>

            {/* Gradient Transition: Black → White */}
            <GradientSpacer
                direction="toWhite"
                imageSrc="/solutions/transition-to-white.jpg"
                className="-my-16 relative z-10"
            />

            {/* White background sections */}
            <div className="bg-white text-gray-900 relative z-10">
                <OpenClawHowItWorks />
                <OpenClawPricing />
                <OpenClawFAQ />
            </div>

            {/* Gradient Transition: White → Black */}
            <GradientSpacer
                direction="toBlack"
                imageSrc="/solutions/transition-to-black.jpg"
                className="-my-16 relative z-10"
            />

            {/* Black background - Contact & Footer */}
            <div className="bg-black">
                <OpenClawContact />
            </div>

            <SolutionsFooter />
        </main>
    );
}
