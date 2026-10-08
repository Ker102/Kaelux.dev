"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const phrases = [
  "An Estonia-based research lab building open-source tools, practical products, and useful systems.",
  "Research-led engineering with collaborators, domain experts, and businesses solving real problems.",
];
const rotationMs = 5500;

function HeroSubtitle() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % phrases.length);
    }, rotationMs);
    return () => clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <div className="hero-subtitle mx-auto mt-5 w-full max-w-2xl">
      <div className="hero-subtitle-copy" aria-live="off">
        <AnimatePresence initial={false} mode="wait">
          <motion.p key={activeIndex}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }}
            transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base leading-7 text-white/85 md:text-xl md:leading-8">
            {phrases[activeIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="hero-subtitle-controls">
        <div className="flex gap-2" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <span key={phrase} className={`h-px w-9 ${index === activeIndex ? "bg-white/80" : "bg-white/25"}`} />
          ))}
        </div>
        <button type="button" onClick={() => setPaused((value) => !value)}
          disabled={reducedMotion} aria-pressed={paused || reducedMotion}
          aria-label={reducedMotion ? "Description rotation disabled by reduced motion" : paused ? "Resume description rotation" : "Pause description rotation"}
          title={reducedMotion ? "Reduced motion is enabled" : paused ? "Resume description rotation" : "Pause description rotation"}
          className="hero-rotation-toggle text-white/65 hover:text-white disabled:opacity-40">
          {paused || reducedMotion ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="lab-hero relative z-10 text-white">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-liquid-art pointer-events-none absolute inset-0">
        <Image src="/images/decorative/liquid-flow-1.png" alt="" width={571} height={1024} loading="eager"
          className="hero-liquid hero-liquid-upper" />
        <Image src="/images/decorative/liquid-flow-left-hq.png" alt="" width={1000} height={1000} loading="eager"
          className="hero-liquid hero-liquid-left absolute left-0 top-0 w-[150px] -translate-x-[20%] md:w-[600px] lg:w-[800px]" />
        <Image src="/images/decorative/liquid-flow-3.png" alt="" width={1024} height={571} loading="eager"
          className="hero-liquid hero-liquid-bottom" />
      </div>
      <div className="lab-enter relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center">
        <div className="hero-star-scene relative mb-6 h-20 w-20 md:h-28 md:w-28" aria-hidden="true">
          <Image src="/images/decorative/star-glow.png" alt="" width={300} height={300}
            className="hero-star-halo pointer-events-none absolute left-1/2 top-1/2 w-[160%] max-w-none -translate-x-1/2 -translate-y-1/2" />
          <Image src="/images/decorative/shiny-star-v2.png" alt="" width={200} height={200} loading="eager"
            className="lab-star hero-star-shimmer relative h-full w-full object-contain" />
        </div>
        <h1 className="sr-only">Let&apos;s solve real problems.</h1>
        <div className="hero-title-frame relative flex h-14 w-full items-center justify-center overflow-hidden sm:h-16 md:h-24 lg:h-28">
          <Image src="/hero-title-real-problems-chrome.png" alt="" aria-hidden="true"
            width={2170} height={725} priority unoptimized
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 900px"
            className="absolute left-1/2 top-1/2 h-auto w-[92vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 select-none sm:w-[88vw] md:w-[82vw]" />
        </div>
        <HeroSubtitle />
        <div className="hero-actions mt-5 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="#ventures" className="lab-button lab-button-primary">Explore the projects <ArrowDownRight size={17} aria-hidden="true" /></Link>
          <Link href="#contact" className="lab-button lab-button-secondary">Work with us <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
