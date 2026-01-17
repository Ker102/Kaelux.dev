'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, X, Globe, Github, Linkedin, Instagram, ArrowRight, Briefcase, BookOpen, Layers } from 'lucide-react';
import { Html } from '@react-three/drei';
import { SiHuggingface } from 'react-icons/si';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      delay: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      delay: 0.3,
    },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: 0.8,
    },
  },
};

// Reusable link item component with hover animations
const LinkItem: React.FC<{ href: string; icon: React.ElementType; label: string; index: number }> = ({
  href,
  icon: Icon,
  label,
  index
}) => (
  <motion.a
    href={href}
    variants={itemVariants}
    whileHover={{
      scale: 1.03,
      x: 4,
      transition: { type: 'spring', stiffness: 400, damping: 25 }
    }}
    whileTap={{ scale: 0.98 }}
    className="group/item relative flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-colors duration-300"
  >
    <div className="flex items-center space-x-4 z-10">
      <motion.div
        className="p-2.5 rounded-xl bg-black/20 text-white/80 group-hover/item:text-white group-hover/item:bg-black/40 transition-colors shadow-inner"
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
      >
        <Icon size={20} strokeWidth={1.5} />
      </motion.div>
      <span className="text-white/90 font-medium tracking-wide text-sm md:text-base">
        {label}
      </span>
    </div>
    <motion.div
      className="text-white/20 group-hover/item:text-white/80 transition-colors z-10"
      initial={{ x: 0 }}
      whileHover={{ x: 4 }}
    >
      <ArrowRight size={16} strokeWidth={2} />
    </motion.div>
  </motion.a>
);

// Section header component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <motion.h4
    variants={itemVariants}
    className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 px-1"
  >
    {title}
  </motion.h4>
);

// Divider component with animation
const Divider = () => (
  <motion.div
    variants={itemVariants}
    className="w-full h-px bg-white/5 my-3"
  />
);

export const UIOverlay: React.FC = () => {
  const socials = [
    { id: 1, label: 'Website', icon: Globe, href: 'https://kaelux.dev' },
    { id: 2, label: 'GitHub', icon: Github, href: 'https://github.com/Ker102' },
    { id: 3, label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/kristofer-jussmann-b8a398382/' },
    { id: 4, label: 'Instagram', icon: Instagram, href: 'https://instagram.com/kaelux.dev' },
    { id: 5, label: 'Hugging Face', icon: SiHuggingface, href: 'https://huggingface.co/ker102' },
  ];

  const services = [
    { id: 1, label: 'Tailored AI for business', icon: Briefcase, href: '/solutions#tailored-ai' },
    { id: 2, label: 'Complete platform solutions', icon: Layers, href: '/solutions#platform-solutions' },
  ];

  const wiki = [
    { id: 1, label: 'Learn more about our systems', icon: BookOpen, href: '/wiki' },
  ];

  const openSource = [
    { id: 1, label: 'n8n Workflow Atlas', icon: Github, href: 'https://ker102.github.io/n8n-ai-automation-workflow-atlas/' },
    { id: 2, label: 'Kaelux-Automate', icon: Github, href: 'https://github.com/Ker102/Kaelux-Automate' },
    { id: 3, label: 'Crosswind Console', icon: Github, href: 'https://github.com/Ker102/Crosswind-Console' },
    { id: 4, label: 'ModelForge', icon: Github, href: 'https://github.com/Ker102/ModelForge' },
    { id: 5, label: 'PromptTriage', icon: Github, href: 'https://github.com/Ker102/PromptTriage' },
    { id: 6, label: 'Astroblogauto', icon: Github, href: 'https://github.com/Ker102/Astroblogauto' },
  ];

  return (
    <Html fullscreen>
      <div className="w-full h-full flex flex-col justify-between overflow-y-auto">
        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-end p-6 space-x-4 flex-shrink-0"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: -180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="p-2 text-white/50 hover:text-white transition-colors rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-white/10"
          >
            <RotateCcw size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="p-2 text-white/50 hover:text-white transition-colors rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-white/10"
          >
            <X size={16} />
          </motion.button>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex-grow flex flex-col items-center justify-start px-4 pb-8 w-full">

          {/* Header Section */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-8 z-20 flex-shrink-0"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-tight mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            >
              <span
                className="bg-clip-text text-transparent animate-gradient-shift"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 25%, #5C24FF 50%, #D94FD5 75%, #FF3BFF 100%)',
                  backgroundSize: '200% 100%',
                }}
              >
                Portal to Kaelux.
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg font-light tracking-wide opacity-80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We turn complex ideas into effortless experiences
            </motion.p>
          </motion.div>

          {/* Glass Card Links Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md perspective-1000"
          >
            {/* The Glass Container */}
            <motion.div
              className="relative rounded-[2rem] overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_-12px_rgba(100,100,255,0.25)] group border border-white/10 bg-gray-900/30 backdrop-blur-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >

              {/* Subtle inner glow/gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative p-6 flex flex-col gap-2"
              >

                {/* Featured Section */}
                <div>
                  <SectionHeader title="Featured" />
                  <LinkItem
                    href="https://ker102.github.io/n8n-ai-automation-workflow-atlas/"
                    icon={Github}
                    label="n8n Workflow Atlas"
                    index={0}
                  />
                </div>

                <Divider />

                {/* Services Section */}
                <div>
                  <SectionHeader title="Services" />
                  <div className="flex flex-col gap-2">
                    {services.map((item, idx) => (
                      <LinkItem key={item.id} href={item.href} icon={item.icon} label={item.label} index={idx} />
                    ))}
                  </div>
                </div>

                <Divider />

                {/* Wiki Section */}
                <div>
                  <SectionHeader title="Wiki" />
                  {wiki.map((item, idx) => (
                    <LinkItem key={item.id} href={item.href} icon={item.icon} label={item.label} index={idx} />
                  ))}
                </div>

                <Divider />

                {/* Open-Source & Prototypes Section */}
                <div>
                  <SectionHeader title="Open-Source & Prototypes" />
                  {openSource.map((item, idx) => (
                    <LinkItem key={item.id} href={item.href} icon={item.icon} label={item.label} index={idx} />
                  ))}
                </div>

                <Divider />

                {/* Socials Section */}
                <div>
                  <SectionHeader title="Socials" />
                  <div className="flex flex-col gap-2">
                    {socials.map((link, idx) => (
                      <LinkItem key={link.id} href={link.href} icon={link.icon} label={link.label} index={idx} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Footer CTA Button - iOS 26 Liquid Glass Style */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center pb-8 flex-shrink-0"
        >
          <motion.a
            href="/solutions#contact-form"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.15)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="relative px-8 py-4 rounded-full overflow-hidden
              bg-white/10 backdrop-blur-xl border border-white/20
              text-sm md:text-base text-white/90 font-medium tracking-wide uppercase
              hover:bg-white/15 hover:border-white/30 
              transition-colors duration-300
              shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]"
          >
            {/* Liquid glass shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />

            {/* Inner highlight glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <span className="relative z-10">Reach out to us</span>
          </motion.a>
        </motion.div>
      </div>
    </Html>
  );
};
