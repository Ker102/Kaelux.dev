"use client";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
const outcomes = [
  "Less repeated work across intake, reporting, and handoffs.",
  "Connected tools and data your team already uses.",
  "A focused build with clear ownership and room to improve.",
];
export default function OpenClawBanner() {
  return (
    <section id="business-automations" className="bg-white px-5 py-20 text-black md:py-28">
      <div className="mx-auto max-w-5xl border-t border-black/15 pt-10 md:pt-12">
        <p className="mb-5 text-sm font-medium text-black/60">Business automation</p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">Give your team back the time.</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-black/70 md:text-lg md:leading-8">
          Bring us the workflow that keeps getting in the way. We design focused automations around your people, data, and existing tools, then test them against the work they need to do.
        </p>
        <ul className="my-9 max-w-3xl divide-y divide-black/10">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3 py-4 text-base leading-6">
              <Check size={18} className="mt-0.5 shrink-0 text-black/55" aria-hidden="true" /><span>{outcome}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <Link href="/openclaw" className="lab-button lab-button-light">Explore automations <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <Link href="/pricing" className="lab-text-link">Discuss a collaboration</Link>
        </div>
      </div>
    </section>
  );
}
