import { Variants } from "framer-motion";

// Modern, aggressive yet smooth cinematic curve (custom cubic-bezier)
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
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
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: premiumEase,
    },
  },
};

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  hover: {
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
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: premiumEase,
    },
  },
};

export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: premiumEase,
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: premiumEase,
    },
  },
};
