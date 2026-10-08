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
    <section id="approach" className="relative overflow-hidden bg-transparent px-5 py-20 text-white md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">From a real problem<br className="hidden sm:block" /> to a useful tool.</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
          Kaelux is a collaborative lab. We combine research, practical engineering, and firsthand experience to build tools that work in the real world.
        </p>
        <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <ol className="divide-y divide-white/15">
            {steps.map((step) => (
              <li key={step.title} className="py-5">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-7 text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="relative hidden aspect-square md:block" aria-hidden="true">
            <Image src="/Now_remove_all_202604241650-Picsart-BackgroundRemover.png" alt="" fill
              sizes="(min-width: 1024px) 24rem, 40vw" className="object-contain" />
          </div>
        </div>
        <Link href="/pricing" className="lab-button lab-button-primary mt-8">
          Bring a problem <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
