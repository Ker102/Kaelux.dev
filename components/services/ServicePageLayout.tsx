"use client";

import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServicePricing from "@/components/services/ServicePricing";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceContact from "@/components/services/ServiceContact";
import SolutionsFooter from "@/components/solutions/SolutionsFooter";
import GradientSpacer from "@/components/sections/GradientSpacer";
import { getServiceBySlug } from "@/data/services";

interface ServicePageLayoutProps {
    slug: string;
}

export default function ServicePageLayout({ slug }: ServicePageLayoutProps) {
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <main className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-white text-2xl">Service not found.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen text-white selection:bg-violet-500/30">
            <div className="bg-black">
                <Navbar />
                <ServiceHero
                    title={service.title}
                    tagline={service.tagline}
                    description={service.description}
                    icon={service.icon}
                />
                <ServiceFeatures features={service.features} />
            </div>

            <GradientSpacer
                direction="toWhite"
                className="-my-16 relative z-10"
            />

            <div className="bg-white text-gray-900 relative z-10">
                <ServicePricing plans={service.plans} />
                <ServiceFAQ faqs={service.faqs} />
            </div>

            <GradientSpacer
                direction="toBlack"
                className="-my-16 relative z-10"
            />

            <div className="bg-black">
                <ServiceContact serviceName={service.title} />
            </div>

            <SolutionsFooter />
        </main>
    );
}
