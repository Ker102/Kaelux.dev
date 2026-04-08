"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type CountUpNumberProps = {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    useGrouping?: boolean;
    duration?: number;
    className?: string;
};

type AnimatedNumericTextProps = {
    text: string;
    className?: string;
    numberClassName?: string;
    duration?: number;
};

const NUMBER_TOKEN_REGEX = /(\$?)(\d{1,3}(?:,\d{3})*(?:\.\d+)?)(%|\+|\/mo)?/g;

export function CountUpNumber({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
    useGrouping = true,
    duration = 1.1,
    className,
}: CountUpNumberProps) {
    const targetRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(targetRef, { once: true, amount: 0.7 });
    const prefersReducedMotion = useReducedMotion();
    const [displayValue, setDisplayValue] = useState(0);

    const formatter = useMemo(
        () =>
            new Intl.NumberFormat("en-US", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
                useGrouping,
            }),
        [decimals, useGrouping]
    );

    useEffect(() => {
        if (!inView) {
            return;
        }

        if (prefersReducedMotion) {
            setDisplayValue(value);
            return;
        }

        let frameId = 0;
        const startedAt = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / (duration * 1000), 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(value * easedProgress);

            if (progress < 1) {
                frameId = window.requestAnimationFrame(tick);
            }
        };

        frameId = window.requestAnimationFrame(tick);

        return () => window.cancelAnimationFrame(frameId);
    }, [duration, inView, prefersReducedMotion, value]);

    return (
        <span ref={targetRef} className={className}>
            {prefix}
            {formatter.format(displayValue)}
            {suffix}
        </span>
    );
}

export function AnimatedNumericText({
    text,
    className,
    numberClassName,
    duration,
}: AnimatedNumericTextProps) {
    const parts = useMemo(() => {
        const segments: Array<string | Omit<CountUpNumberProps, "className">> = [];
        let lastIndex = 0;

        for (const match of text.matchAll(NUMBER_TOKEN_REGEX)) {
            const [fullMatch, prefix = "", rawValue = "", suffix = ""] = match;
            const matchIndex = match.index ?? 0;

            if (matchIndex > lastIndex) {
                segments.push(text.slice(lastIndex, matchIndex));
            }

            const decimals = rawValue.includes(".") ? rawValue.split(".")[1].length : 0;

            segments.push({
                value: Number(rawValue.replaceAll(",", "")),
                prefix,
                suffix,
                decimals,
                useGrouping: rawValue.includes(","),
                duration,
            });

            lastIndex = matchIndex + fullMatch.length;
        }

        if (lastIndex < text.length) {
            segments.push(text.slice(lastIndex));
        }

        return segments;
    }, [duration, text]);

    return (
        <span className={className}>
            {parts.map((part, index) =>
                typeof part === "string" ? (
                    <Fragment key={`${part}-${index}`}>{part}</Fragment>
                ) : (
                    <CountUpNumber
                        key={`${part.prefix}${part.value}${part.suffix}-${index}`}
                        {...part}
                        className={cn("tabular-nums", numberClassName)}
                    />
                )
            )}
        </span>
    );
}
