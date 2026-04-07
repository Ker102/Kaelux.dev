import { Variants } from "framer-motion";

// Modern, aggressive yet smooth cinematic curve (custom cubic-bezier)
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    rotateX: -10, // Subtle 3D tilt
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const textStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

export const textReveal: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: -30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: premiumEase,
    },
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 25px 50px rgba(14, 172, 235, 0.15), 0 0 40px rgba(14, 172, 235, 0.1)",
    transition: {
      duration: 0.4,
      ease: premiumEase,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.5, ease: premiumEase },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -50,
    rotateY: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 50,
    rotateY: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};
