"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import GlassSurface from "@/components/GlassSurface";
import FloatingDecor from "@/components/FloatingDecor";
import { HiArrowDown } from "react-icons/hi";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

const MotionImage = motion(Image);

const starAnimation = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
        filter: [
            "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
            "drop-shadow(0 0 45px rgba(255,255,255,1))",
            "drop-shadow(0 0 15px rgba(255,255,255,0.8))"
        ],
        transition: {
            duration: 3,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
};

const glowAnimation = {
    initial: { filter: "drop-shadow(0 0 15px rgba(168,85,247,0.3))" },
    animate: {
        filter: [
            "drop-shadow(0 0 15px rgba(168,85,247,0.3))",
            "drop-shadow(0 0 40px rgba(168,85,247,0.6))",
            "drop-shadow(0 0 20px rgba(192,132,252,0.4))",
            "drop-shadow(0 0 15px rgba(168,85,247,0.3))"
        ],
        transition: {
            duration: 5,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "reverse" as const
        }
    }
};

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    // Generate star properties once and keep them stable across re-renders
    const stars = useMemo(() => {
        return [...Array(100)].map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
    }, []);

    // Only render stars on client side to avoid hydration mismatch
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Animated Stars - Only render on client to avoid hydration mismatch */}
            {isMounted && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {stars.map((star) => (
                        <motion.div
                            key={star.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                left: `${star.left}%`,
                                top: `${star.top}%`,
                                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: star.duration,
                                repeat: Infinity,
                                delay: star.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            )}

            {/* New Static Liquid Flows - Only render on client */}
            {isMounted && (
                <>
                    {/* Top Right Flow */}
                    {/* Top Right Flow */}
                    <div className="absolute top-0 right-0 z-1 pointer-events-none select-none translate-x-[20%] -translate-y-[10%]">
                        <MotionImage
                            src="/images/decorative/liquid-flow-1.png"
                            alt="Liquid Flow Top Right"
                            width={800}
                            height={800}
                            priority
                            className="w-[250px] md:w-[400px] lg:w-[500px] object-contain"
                            initial="initial"
                            animate="animate"
                            variants={glowAnimation}
                        />
                    </div>

                    {/* Left Side Flow */}
                    <div className="absolute top-0 left-0 z-1 pointer-events-none select-none -translate-x-[20%]">
                        <MotionImage
                            src="/images/decorative/liquid-flow-left-hq.png"
                            alt="Liquid Flow Left"
                            width={1000}
                            height={1000}
                            priority
                            className="w-[300px] md:w-[600px] lg:w-[800px] object-contain"
                            initial="initial"
                            animate="animate"
                            variants={glowAnimation}
                        />
                    </div>

                    {/* Bottom Right Flow - From bottom center to right edge */}
                    <div
                        className="absolute bottom-0 right-0 z-1 pointer-events-none select-none translate-x-[5%] translate-y-[5%]"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 20%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)'
                        }}
                    >
                        <MotionImage
                            src="/images/decorative/liquid-flow-3.png"
                            alt="Liquid Flow Bottom"
                            width={900}
                            height={600}
                            className="w-[400px] md:w-[700px] lg:w-[900px] object-contain"
                            initial="initial"
                            animate="animate"
                            variants={glowAnimation}
                        />
                    </div>
                </>
            )}

            {/* Bottom Fade Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent z-5 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                {/* Shining Star */}
                <MotionImage
                    src="/images/decorative/clean-star.png"
                    alt="Shining Star"
                    width={200}
                    height={200}
                    priority
                    className="w-32 h-32 md:w-44 md:h-44 mb-0 object-contain mix-blend-screen"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                >
                    {/* SEO: Visually hidden H1 for search engines and screen readers */}
                    <h1 className="sr-only">
                        AI That Works for You - Kaelux AI Engineering Agency
                    </h1>

                    {/* Main Title - Image */}
                    <motion.div
                        variants={slideInFromRight}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src="/hero-title.png"
                            alt="AI That Works for You"
                            width={900}
                            height={120}
                            priority
                            className="w-auto h-auto max-w-[90vw] md:max-w-[70vw] lg:max-w-[800px] select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                            style={{
                                filter: 'brightness(1.05) contrast(1.02)',
                            }}
                        />
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Tailored LLM infrastructure, AI engineering, and full-stack web services—
                        we build and host the complete technology backbone for your business.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap gap-4 justify-center mt-8"
                    >
                        <MagneticButton
                            onClick={() => scrollToSection("services")}
                            className="px-8 py-4 text-black font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #e8e8e8 25%, #b8b8b8 50%, #8c8c8c 75%, #b8b8b8 100%)',
                                backgroundSize: '200% 200%',
                                animation: 'gradientShift 3s ease infinite',
                                filter: 'saturate(1.3) brightness(1.1)'
                            }}
                        >
                            Our Services
                        </MagneticButton>
                        <MagneticButton
                            onClick={() => scrollToSection("contact")}
                            className="shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={9999}
                                className="px-8 py-4"
                            >
                                <span className="font-semibold">Get In Touch</span>
                            </GlassSurface>
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="cursor-pointer"
                        onClick={() => scrollToSection("about")}
                    >
                        <HiArrowDown className="w-10 h-10 text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

