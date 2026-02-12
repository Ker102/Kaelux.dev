import Navbar from "@/components/Navbar";
import SolutionsFooter from "@/components/solutions/SolutionsFooter";
import GradientSpacer from "@/components/sections/GradientSpacer";
import PricingPageContent from "@/components/pricing/PricingPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | Kaelux - AI Solutions & Platform Services",
    description:
        "Transparent pricing for all Kaelux services. From managed OpenClaw hosting to custom UI/UX design, full-stack development, cloud infrastructure, and CI/CD pipelines.",
    keywords: [
        "kaelux pricing",
        "AI services pricing",
        "openclaw pricing",
        "web development pricing",
        "cloud hosting pricing",
    ],
    openGraph: {
        title: "Pricing | Kaelux",
        description: "Transparent pricing for all Kaelux services.",
        type: "website",
        url: "https://kaelux.dev/pricing",
    },
    alternates: {
        canonical: "https://kaelux.dev/pricing",
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen text-white selection:bg-violet-500/30">
            <div className="bg-black">
                <Navbar />
                <PricingPageContent />
            </div>

            <GradientSpacer
                direction="toWhite"
                imageSrc="/solutions/transition-to-white.jpg"
                className="-my-16 relative z-10"
            />

            <div className="bg-white text-gray-900 relative z-10" id="contact">
                <PricingContact />
            </div>

            <GradientSpacer
                direction="toBlack"
                imageSrc="/solutions/transition-to-black.jpg"
                className="-my-16 relative z-10"
            />

            <SolutionsFooter />
        </main>
    );
}

function PricingContact() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-400 mb-6">
                    Need a Custom Quote?
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Every project is unique. Reach out to discuss your requirements and
                    get a tailored proposal within 24 hours.
                </p>
                <a
                    href="/solutions#contact-form"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white text-lg font-semibold hover:bg-black transition-colors duration-300"
                >
                    Contact Us →
                </a>
            </div>
        </section>
    );
}
