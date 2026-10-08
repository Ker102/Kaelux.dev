"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { title: "Understand the problem.", text: "Start with the people, constraints, and existing workflow. Define what a better result would look like." },
  { title: "Build with the people using it.", text: "Work in small, testable steps. Share prototypes, inspect the output, and act on what users find." },
  { title: "Measure and improve.", text: "Keep what helps. Publish reusable tools and lessons, then improve the next version with evidence." },
];

export default function ServiceIntroduction() {
  return (
    <section id="approach" className="relative bg-transparent px-5 py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">From a real problem<br className="hidden sm:block" /> to a useful tool.</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
          Kaelux is a collaborative lab. We combine research, practical engineering, and firsthand experience to build tools that work in the real world.
        </p>
        <div className="approach-content-grid mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ol className="approach-step-list divide-y divide-white/15">
            {steps.map((step) => (
              <li key={step.title} className="py-5">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-7 text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="approach-handoff">
            <Link href="/pricing" className="lab-button lab-button-primary approach-held-cta">
              <span>Bring a problem</span> <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <div className="approach-robot-crop" aria-hidden="true">
              <Image src="/Now_remove_all_202604241650-Picsart-BackgroundRemover.png" alt=""
                width={2752} height={1536} sizes="(min-width: 1024px) 64rem, 48rem"
                className="approach-robot-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
