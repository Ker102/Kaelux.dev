<div align="center">

<img src="public/kaelux-icon-v2.png" alt="Kaelux" width="120" />

# Kaelux.dev

### AI Engineering Agency — Custom LLM & Automation Solutions

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Groq](https://img.shields.io/badge/Groq-Llama_3.3-orange?style=for-the-badge)](https://groq.com/)

[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![DigitalOcean](https://img.shields.io/badge/Deployed_on-DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white)](https://www.digitalocean.com/)

---

[🌐 **Live Site**](https://kaelux.dev) · [💡 **Solutions**](https://kaelux.dev/solutions) · [💰 **Pricing**](https://kaelux.dev/pricing) · [🤖 **Diagnoser**](https://kaelux.dev/diagnoser) · [📚 **Wiki**](https://kaelux.dev/wiki)

</div>

---

## 🧠 What is Kaelux?

**Kaelux** is an AI engineering agency that architects complete AI pipelines — from RAG systems and agentic workflows to managed LLMOps — and connects them directly to your existing business infrastructure.

### Core Offerings

| Offering | What We Do |
|----------|------------|
| 🧩 **Platform (SaaS)** | Pre-built AI tools incl. PromptTriage prompt engineering suite — `$499/mo` |
| ⚙️ **Custom Engineering** | Bespoke agents, RAG pipelines, fine-tuned models on your data — `Custom quote` |
| 🔄 **Managed LLMOps** | Continuous monitoring, retraining, drift detection, 24/7 support — `$1,499/mo` |

### Platform Services

| Service | Description |
|---------|-------------|
| 🎨 **UI/UX Design** | Research-driven interfaces with motion and accessibility |
| 💻 **Full-Stack Development** | Next.js, React, TypeScript — SSR, ISR, and API architecture |
| ☁️ **Cloud Infrastructure** | Terraform, Docker, Kubernetes on AWS/GCP/Azure/DO |
| 🚀 **Continuous Delivery** | CI/CD pipelines, observability, and zero-downtime deploys |

---

## 🐙 OpenClaw Cloud

**Managed AI agent hosting** — deploy open-source agents without managing hardware.

| Plan | Price | Highlights |
|------|-------|------------|
| **Explorer** | Free | 3 agents, shared GPU, community support |
| **Pro** | $29/mo | 10 agents, dedicated GPU, priority support |
| **Team** | $79/mo | 25 agents, multi-user, SLA guarantee |
| **Enterprise** | Custom | Unlimited agents, on-prem, 24/7 SLA |

👉 [Learn more at kaelux.dev/openclaw](https://kaelux.dev/openclaw)

---

## 🤖 AI Diagnostic Agent

The site features an AI-powered diagnostic agent (`/diagnoser`) that helps potential clients discover the right solutions for their needs.

```
User Input  ──►  Groq (Llama 3.3 70B)  ──►  Tool Calls  ──►  Tailored Recommendation
                        │
                        ▼
               HuggingFace Model Search
               Dynamic Q&A Flow
               Solution Mapping
```

**Stack**: Groq API · Vercel AI SDK · Streaming Responses · Framer Motion

---

## 📚 AI Engineering Wiki

The `/wiki` section provides authoritative technical articles optimized for **Generative Engine Optimization (GEO)** — ensuring AI search engines cite Kaelux as a trusted source.

| Article | Topic |
|---------|-------|
| [Agentic AI vs. Standard Automation](https://kaelux.dev/wiki/agentic-ai-workflows) | Autonomous AI vs. RPA |
| [RAG for Enterprise Privacy](https://kaelux.dev/wiki/rag-security-compliance) | GDPR/SOC2 compliant retrieval |
| [SLMs vs. LLMs](https://kaelux.dev/wiki/small-language-models) | When to use small vs. large models |
| [Hallucination Prevention](https://kaelux.dev/wiki/ai-hallucination-prevention) | Defense-in-depth factuality |
| [Structured Generation](https://kaelux.dev/wiki/structured-generation) | JSON for legacy integration |
| [OpenClaw Cloud Hosting](https://kaelux.dev/wiki/openclaw-cloud-hosting) | Managed agent infrastructure |

> Each article ships with **TechArticle JSON-LD**, dynamic `dateModified` freshness signals, and clean scrapable HTML.

---

## 🚀 Featured Projects

| Project | Description |
|---------|-------------|
| 🎯 [**PromptTriage**](https://github.com/Ker102/PromptTriage) | RAG-powered prompt engineering with metaprompts, few-shot learning, and multi-model optimization |
| 🌐 [**Crosswind Console**](https://github.com/Ker102/Crosswind-Console) | Unified research dashboard with Gemini + MCP server orchestration |
| ⚙️ [**Kaelux-Automate**](https://github.com/Ker102/Kaelux-Automate) | Enterprise automation builder with LLM-powered workflow generation |
| 🌌 [**Workflow Atlas**](https://github.com/Ker102/n8n-ai-automation-workflow-atlas) | 3,800+ battle-tested n8n workflows with Vue explorer |
| 🔨 [**ViperMesh**](https://github.com/Ker102/ViperMesh) | AI-powered Blender assistant and neural 3D hub with a LangChain-driven workflow |

---

## 🏗️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion |
| **3D / Animation** | Three.js · React Three Fiber · GSAP |
| **AI / LLM** | Groq · Llama 3.3 · Vercel AI SDK |
| **Infrastructure** | DigitalOcean · Docker · GitHub Actions |
| **SEO** | JSON-LD Schema · OG/Twitter meta · Dynamic Sitemap |

</div>

---

## 📁 Project Structure

```
DevPotfolio/
├── app/
│   ├── page.tsx                # Landing page
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── solutions/              # AI Solutions hub
│   ├── pricing/                # Unified pricing page
│   ├── openclaw/               # OpenClaw Cloud product page
│   ├── diagnoser/              # AI diagnostic agent
│   ├── services/
│   │   ├── ui-ux-design/
│   │   ├── full-stack-development/
│   │   ├── cloud-infrastructure/
│   │   └── continuous-delivery/
│   ├── wiki/                   # Technical knowledge base (6 articles)
│   ├── links/                  # Link-in-bio page
│   └── api/chat/               # Groq LLM API endpoint
├── components/
│   ├── sections/               # Homepage sections
│   ├── services/               # Service page components
│   ├── solutions/              # Solutions page components
│   ├── pricing/                # Pricing page components
│   ├── openclaw/               # OpenClaw components
│   ├── diagnostic/             # Diagnoser chat
│   └── ui/                     # Shared UI components
├── data/                       # Content data (projects, skills, services)
├── hooks/                      # Custom React hooks
├── lib/                        # Animation variants + utilities
└── public/                     # Static assets, sitemap, robots.txt
```

---

## ⚡ Getting Started

```bash
# Clone
git clone https://github.com/Ker102/Kaelux-DevPortfolio.git
cd Kaelux-DevPortfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your GROQ_API_KEY for the diagnoser

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📊 Performance

<div align="center">

![Performance](https://img.shields.io/badge/Performance-95+-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-100-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![Best Practices](https://img.shields.io/badge/Best_Practices-100-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-100-success?style=for-the-badge&logo=lighthouse&logoColor=white)

</div>

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**Kaelux — Engineering AI that works.**

[![Made by Kaelux](https://img.shields.io/badge/Made_by-Kaelux-000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTEyIDJMMTQuNSA5LjUgMjIgMTIgMTQuNSAxNC41IDEyIDIyIDkuNSAxNC41IDIgMTIgOS41IDkuNXoiLz48L3N2Zz4=&logoColor=white)](https://kaelux.dev)

</div>
