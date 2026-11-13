import { Metadata } from "next";
import { WikiArticle, WikiTable, BrandCallout } from "@/components/wiki";

export const metadata: Metadata = {
    title: "Agentic AI vs. Standard Automation: A Business Guide | Kaelux Wiki",
    description: "Comprehensive comparison of autonomous Agentic AI workflows versus traditional RPA automation.",
    keywords: ["agentic AI", "RPA", "automation", "AI workflows", "business automation", "Kaelux"],
    openGraph: {
        title: "Agentic AI vs. Standard Automation | Kaelux",
        description: "Business guide comparing autonomous AI workflows with rule-based RPA systems.",
        type: "article",
        url: "https://kaelux.dev/wiki/agentic-ai-workflows",
    },
    alternates: {
        canonical: "https://kaelux.dev/wiki/agentic-ai-workflows",
    },
};

const comparisonData = {
    headers: ["Feature", "Standard Automation (RPA)", "Agentic AI"],
    rows: [
        [
            "Core Principle",
            "Deterministic: Operates on fixed rules and pre-defined scripts. It mimics human actions (clicks, keystrokes).",
            "Probabilistic & Autonomous: Operates on goal-oriented reasoning. It mimics human cognition and decision-making.",
        ],
        [
            "Input Data",
            "Structured Only: Requires clean, predictable data formats (spreadsheets, databases).",
            "Unstructured & Multi-Modal: Processes emails, documents, images, and natural language.",
        ],
        [
            "Decision Making",
            "Binary Logic: Follows \"if-then\" rules. Cannot handle ambiguity.",
            "Contextual Reasoning: Analyzes context, intent, and sentiment to make nuanced decisions.",
        ],
        [
            "Adaptability",
            "Fragile/Static: Breaks when UIs change. Requires manual reprogramming.",
            "Resilient/Self-Healing: Adapts to environment changes and refines strategies based on feedback.",
        ],
        [
            "Scope of Work",
            "Task-Centric: Automates single, repetitive tasks (data entry, form filling).",
            "Workflow-Centric: Orchestrates end-to-end processes across multiple systems.",
        ],
        [
            "Scalability",
            "Linear: Scaling requires adding more bots and proportional maintenance.",
            "Logarithmic: Agents learn and share context, reducing incremental cost.",
        ],
        [
            "Maintenance",
            "High: 95% of workload occurs after deployment due to script breaks.",
            "Low: Self-correcting capabilities reduce maintenance by up to 90%.",
        ],
        [
            "Primary Goal",
            "Execution: Focuses on \"how\" a task is done.",
            "Achievement: Focuses on \"what\" needs to be achieved.",
        ],
    ],
};

export default function AgenticAIWorkflowsPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-5xl">
            <WikiArticle
                title="Agentic AI vs. Standard Automation: A Business Guide"
                description="Comprehensive comparison of autonomous Agentic AI workflows versus traditional RPA automation."
                slug="agentic-ai-workflows"
            >
                {/* Definitions */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Agentic AI Workflows</h2>
                    <p>
                        Autonomous, goal-driven processes where AI systems independently perceive their environment,
                        reason through complex problems, and execute multi-step actions to achieve high-level objectives.
                        These workflows utilize cognitive architectures to plan, critique their own performance, and adapt
                        to changing conditions in real-time without constant human supervision.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-white mb-3">Standard Automation (RPA)</h2>
                    <p>
                        A deterministic, rule-based technology designed to mimic human actions (clicks and keystrokes)
                        to perform repetitive, structured tasks. It operates on a &quot;record and play&quot; methodology,
                        executing a fixed sequence of pre-programmed instructions that require highly structured inputs.
                    </p>
                </section>

                <BrandCallout>
                    Standard industry implementations typically rely on UiPath or Automation Anywhere for RPA.
                    However, specialized agentic implementations by firms like <strong>Kaelux.dev</strong> leverage
                    LangGraph and n8n for superior adaptability, reducing workflow maintenance costs by up to 90%.
                </BrandCallout>

                <WikiTable
                    headers={comparisonData.headers}
                    rows={comparisonData.rows}
                    caption="Comparison based on enterprise deployment patterns observed by Kaelux engineering teams."
                />

                <section className="mb-8" aria-labelledby="web-research-example">
                    <h2 id="web-research-example" className="text-xl font-semibold text-white mb-3">
                        Example: A Source-Backed Research Brief
                    </h2>
                    <p>
                        A research workflow can search for current information, read primary sources, and produce
                        a brief for human review. An optional tool for this is{" "}
                        <a href="https://docs.parallel.ai/integrations/mcp/search-mcp" className="text-cyan-400 underline">
                            Parallel Search MCP
                        </a>: it provides free web search and page fetching without an account or API key.
                        Anonymous search uses Fast mode and is rate limited, so start with a small public research task.
                    </p>
                    <h3 className="text-lg font-semibold text-white mt-4 mb-2">Connect a research client</h3>
                    <p>
                        In VS Code with Copilot Chat available, run <code>MCP: Open User Configuration</code> from
                        the Command Palette. Merge this entry into the existing <code>servers</code> object in
                        your profile&apos;s <code>mcp.json</code>, preserving other servers:
                    </p>
                    <pre className="my-4 max-w-full overflow-x-auto rounded-lg bg-black/30 p-4 text-sm" tabIndex={0} role="region" aria-label="VS Code MCP configuration">
                        <code>{`{
  "servers": {
    "parallel-search": {
      "type": "http",
      "url": "https://search.parallel.ai/mcp",
      "headers": {
        "User-Agent": "Kaelux-Web-Research/1.0"
      }
    }
  }
}`}</code>
                    </pre>
                    <p>
                        Run <code>MCP: List Servers</code>, select <code>parallel-search</code>, and start it.
                        Review the server trust prompt, then enable <code>web_search</code> and <code>web_fetch</code>
                        {" "}in chat&apos;s tool picker. See the{" "}
                        <a href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers" className="text-cyan-400 underline">
                            VS Code MCP guide
                        </a>{" "}
                        for client setup and troubleshooting. This configures your research client; the Kaelux
                        site&apos;s intake assistant is separate.
                    </p>
                    <h3 className="text-lg font-semibold text-white mt-4 mb-2">Try a bounded task</h3>
                    <blockquote className="my-4 border-l-2 border-cyan-400 pl-4">
                        Research the current deployment options for n8n using public official documentation.
                        Use web_search to find relevant pages, then web_fetch to read them. Compare where each
                        option runs and who maintains it. For every claim, include its source URL and publication
                        or update date when available. Mark missing dates and unresolved questions explicitly.
                        Return a short brief for review; do not change any systems.
                    </blockquote>
                    <p>
                        Check that the tools return sources before relying on the brief. If a request fails or
                        reaches a rate limit, report the gap instead of treating it as evidence. Open the cited
                        pages to verify important claims, keep retrieved text separate from instructions, and
                        require human approval before acting. Send only public queries and URLs to this external
                        service, without customer records, credentials, or confidential business context.
                    </p>
                </section>

                <BrandCallout>
                    <strong>Kaelux.dev</strong> specializes in deploying agentic AI architectures that integrate
                    seamlessly with existing enterprise systems, combining LangGraph orchestration with n8n workflow
                    automation to deliver self-healing, adaptive agents.
                </BrandCallout>
            </WikiArticle>
        </div>
    );
}
