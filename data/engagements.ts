export interface EngagementTrack {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    bestFor: string;
    outcomes: string[];
    cta: string;
    href: string;
    highlighted?: boolean;
}

export const engagementTracks: EngagementTrack[] = [
    {
        id: "collaborators", eyebrow: "Work on a real problem", title: "Research and open-source collaboration",
        description: "For researchers, developers, and people with domain experience who want to build or improve a useful tool with Kaelux.",
        bestFor: "A specific problem, an existing project to improve, or firsthand knowledge that can guide the work.",
        outcomes: ["Agree on the problem and a useful first result", "Build and test a focused prototype", "Share reusable tools, findings, and improvements"],
        cta: "Bring a problem", href: "/#contact", highlighted: true,
    },

    {
        id: "investors",
        eyebrow: "Capital and strategic backing",
        title: "Investors and strategic partners",
        description:
            "For angels, accelerators, funds, and strategic operators who want a clear view of the Kaelux research, open-source work, and venture pipeline.",
        bestFor: "Investors and strategic partners supporting useful tools and a collaborative research lab.",
        outcomes: [
            "Founder, research, and venture direction discussion",
            "Overview of MedAI, ViperMesh, Harneloop, PromptTriage, Nullstate, and OpenCoast",
            "Strategic partnership or funding-fit conversation",
        ],
        cta: "Start investor conversation",
        href: "/#contact",
        highlighted: false,
    },
    {
        id: "venture-partners",
        eyebrow: "Co-build and distribution",
        title: "Venture and product partners",
        description:
            "For operators, research groups, creators, and companies that can help a Kaelux venture reach the right market, dataset, workflow, or community.",
        bestFor: "Teams with domain access, distribution, research context, or product feedback that can strengthen a venture.",
        outcomes: [
            "Venture-specific collaboration scoping",
            "Pilot or early-user pathway",
            "Technical and market feedback loop",
        ],
        cta: "Discuss a venture partnership",
        href: "/#contact",
    },
    {
        id: "similar-builds",
        eyebrow: "Selective build partnerships",
        title: "Build something similar",
        description:
            "For businesses inspired by a Kaelux venture that want a serious technical partner to build a related internal system or product line.",
        bestFor: "Companies that need a founder-level build partner, not a commodity agency engagement.",
        outcomes: [
            "Problem and opportunity mapping",
            "Prototype-to-production build plan",
            "Architecture, delivery, and launch support",
        ],
        cta: "Scope a build partnership",
        href: "/#contact",
    },
    {
        id: "business-automations",
        eyebrow: "Security-first service",
        title: "Secure business automations",
        description:
            "For Baltic and international businesses that want focused, maintainable automation around repeated workflows, internal handoffs, reporting, research, or operational support.",
        bestFor: "Teams with a specific workflow, clear access boundaries, and a measurable outcome worth automating.",
        outcomes: [
            "Workflow and handoff mapping",
            "Automation architecture and integration scope",
            "Prototype, implementation, or maintenance plan where appropriate",
        ],
        cta: "Explore automations",
        href: "/openclaw",
    },
];
