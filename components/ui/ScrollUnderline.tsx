"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type ScrollUnderlineProps = {
    children: React.ReactNode;
    className?: string;
    underlineClassName?: string;
};

export function ScrollUnderline({
    children,
    className,
    underlineClassName,
}: ScrollUnderlineProps) {
    const prefersReducedMotion = useReducedMotion();
    const revealViewport = {
        once: false,
        amount: 1,
        margin: "-20% 0px -26% 0px",
    } as const;

    return (
        <span className={cn("relative inline-block pb-[0.18em]", className)}>
            <span className="relative z-10">{children}</span>
            <motion.span
                aria-hidden="true"
                initial={
                    prefersReducedMotion
                        ? { opacity: 0.92, scaleX: 1 }
                        : { opacity: 0.32, scaleX: 0 }
                }
                whileInView={{ opacity: 0.92, scaleX: 1 }}
                viewport={revealViewport}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "pointer-events-none absolute -left-[0.04em] -right-[0.04em] bottom-[0.02em] h-[0.14em] origin-left rounded-full -rotate-[0.7deg] bg-gradient-to-r from-transparent via-white/75 to-transparent",
                    underlineClassName
                )}
            />
            <motion.span
                aria-hidden="true"
                initial={prefersReducedMotion ? { opacity: 0.45, scaleX: 1 } : { opacity: 0.1, scaleX: 0 }}
                whileInView={{ opacity: 0.45, scaleX: 1 }}
                viewport={revealViewport}
                transition={{ duration: 0.86, delay: prefersReducedMotion ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-x-0 bottom-[0.12em] h-px origin-left rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
        </span>
    );
}
