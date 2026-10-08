"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="lab-hero relative isolate overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image src="/images/decorative/liquid-flow-1.png" alt="" width={800} height={800} className="absolute right-[-6rem] top-[-2rem] w-[19rem] opacity-40 md:w-[30rem]" />
        <Image src="/images/decorative/liquid-flow-left-hq.png" alt="" width={1000} height={1000} className="absolute left-[-8rem] top-20 w-[23rem] opacity-35 md:left-[-10rem] md:w-[40rem]" />
        <Image src="/images/decorative/liquid-flow-3.png" alt="" width={1024} height={571} className="absolute bottom-[-4rem] right-[-8rem] w-[30rem] opacity-30 md:w-[48rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>
      <div className="lab-enter relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center">
        <Image src="/images/decorative/shiny-star-v2.png" alt="" width={200} height={200} priority className="lab-star mb-5 h-16 w-16 object-contain md:h-20 md:w-20" />
        <p className="mb-5 text-base font-semibold text-white md:text-lg">Kaelux</p>
        <h1 className="sr-only">Let&apos;s solve real problems.</h1>
        <div className="relative flex h-14 w-full items-center justify-center overflow-hidden sm:h-16 md:h-24 lg:h-28">
          <Image src="/hero-title-real-problems.png" alt="" aria-hidden="true"
            width={2170} height={725} priority unoptimized
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 900px"
            className="absolute left-1/2 top-1/2 h-auto w-[92vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 select-none sm:w-[88vw] md:w-[82vw]" />
        </div>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-xl md:leading-8">
          We build useful tools with researchers, developers, and people who know the problem firsthand.
        </p>
        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="#ventures" className="lab-button lab-button-primary">Explore the projects <ArrowDownRight size={17} aria-hidden="true" /></Link>
          <Link href="#contact" className="lab-button lab-button-secondary">Work with us <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
