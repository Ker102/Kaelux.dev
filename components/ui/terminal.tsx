"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TerminalProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export function Terminal({ children, className, title = "Terminal" }: TerminalProps) {
    return (
        <div
            className={cn(
                "relative rounded-2xl overflow-hidden",
                className
            )}
            style={{ background: '#09090b' }}
        >
            {/* Glass Sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            {/* Chrome Border */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

            <div className="relative z-10">
                {/* Terminal Header */}
                <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 ml-2">{title}</span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface TypingAnimationProps {
    children: string;
    delay?: number;
    className?: string;
}

export function TypingAnimation({ children, delay = 0, className }: TypingAnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay / 1000, duration: 0.15 }}
            className={cn("flex items-start gap-2", className)}
        >
            <span className="text-emerald-400 select-none shrink-0">❯</span>
            <motion.span
                className="text-zinc-300"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: delay / 1000, duration: 0.8, ease: "easeOut" }}
                style={{ overflow: "hidden", display: "inline-block", whiteSpace: "nowrap" }}
            >
                {children}
            </motion.span>
        </motion.div>
    );
}

interface AnimatedSpanProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function AnimatedSpan({ children, delay = 0, className }: AnimatedSpanProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay / 1000, duration: 0.3 }}
            className={cn("text-zinc-400 pl-5", className)}
        >
            {children}
        </motion.div>
    );
}
