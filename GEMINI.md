# Project Gemini Context: DevPortfolio

## Overview
**DevPortfolio** is a modern, high-performance developer portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. It features advanced animations, glassmorphism effects, and a responsive design to showcase projects and skills.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4, `clsx`, `tailwind-merge`, `tailwindcss-animate`
- **Animations**: Framer Motion 11.0, GSAP, Three.js (`@react-three/fiber`, `@react-three/drei`)
- **UI Components**: `shadcn` (implied), `lucide-react`, `react-icons`
- **Forms**: React Hook Form
- **Utilities**: `mathjs`, `simplex-noise`
- **Deployment**: Vercel

## Project Structure
```
📁 DevPotfolio/
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout with metadata & providers
│   ├── page.tsx                     # Main landing page
│   └── globals.css                  # Global styles & gradient definitions
│
├── 📂 components/                   # React Components
│   ├── 📂 sections/                 # Page Sections (Hero, About, Projects, Contact)
│   ├── DeviceMockup.tsx             # Device frames for project previews
│   ├── FloatingDecor.tsx            # Animated background elements
│   ├── GlassSurface.tsx             # Glassmorphism surface component
│   ├── LogoLoop.tsx                 # Infinite tech logo carousel
│   ├── MagneticButton.tsx           # Interactive magnetic hover effect
│   ├── Navbar.tsx                   # Navigation with blur effect
│   ├── ScrollProgress.tsx           # Reading progress indicator
│   └── ThemeToggle.tsx              # Dark/Light mode switcher
│
├── 📂 data/                         # Content Data
│   ├── projects.ts                  # Project showcase data
│   └── skills.ts                    # Skills & technologies
│
├── 📂 hooks/                        # Custom React Hooks
│   └── useMediaQuery.ts             # Responsive breakpoint hook
│
├── 📂 lib/                          # Utilities
│   └── animations.ts                # Framer Motion animation variants
│
└── 📂 public/                       # Static Assets
```

## Key Features
- **Glassmorphism UI**: Modern frosted glass effects.
- **Custom Gradient Theme**: Cyan → Green → Yellow gradient system.
- **Dark Mode**: Fully supported with smooth transitions.
- **Animations**:
    - Scroll-triggered fade-ins.
    - Magnetic button physics.
    - 3D tilt effects on project cards.
    - Infinite tech logo loop.
- **Performance**: Server-side rendering, image optimization, code splitting.

## Development Workflow

### Prerequisites
- Node.js 18.17+
- npm 9.0+

### Commands
- **Start Dev Server**: `npm run dev` (Runs on http://localhost:3000)
- **Build for Production**: `npm run build`
- **Start Production Server**: `npm start`
- **Lint Code**: `npm run lint`

## Configuration
- `next.config.js`: Next.js settings.
- `tailwind.config.ts`: Tailwind theme and colors.
- `tsconfig.json`: TypeScript configuration.
- `components.json`: shadcn UI configuration.

## Design System
- **Colors**:
    - `gradient-start`: #06b6d4 (Cyan)
    - `gradient-mid`: #10b981 (Green)
    - `gradient-end`: #fbbf24 (Yellow)

## Current Task
- **Objective**: CI/CD pipeline repair + self-healing workflow fixes
- **Progress**: Fixed 3 workflow files: `auto-fix-on-failure.yml` (wildcard trigger), `auto-merge-copilot-fix.yml` (Copilot user.login), `dependabot-auto-merge.yml` (added build verification gate). Confirmed `ci.yml` is fine — `actions/checkout@v6` is valid. Local build passes.
- **Blockers**: Need to investigate exact CI build failure (logs require auth). Need user to set up branch protection rules.
- **Next Steps**: Push workflow fixes, verify CI pipeline passes, investigate DO deployment logs.


