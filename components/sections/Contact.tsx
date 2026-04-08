"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedNumericText } from "@/components/ui/AnimatedNumberText";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SiGmail, SiGithub, SiInstagram } from "react-icons/si";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { HiOutlineBolt } from "react-icons/hi2";

const contactChannels = [
  {
    name: "Email",
    icon: SiGmail,
    label: "hello@kaelux.dev",
    href: "mailto:Kristoferjussmann@gmail.com",
    color: "#EA4335",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    label: "Kaelux",
    href: "https://linkedin.com/in/kristofer-jussmann-b8a398382",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    label: "Ker102",
    href: "https://github.com/ker102",
    color: "#ffffff",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    label: "@kaelux.dev",
    href: "https://instagram.com/kaelux.dev",
    color: "#E4405F",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >


      <div className="relative z-10 container mx-auto max-w-5xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              <AnimatedNumericText
                text="Have a project in mind? Ready to modernize your infrastructure? Reach out — our team responds within 24 hours."
                numberClassName="font-semibold text-white"
              />
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {contactChannels.map((channel) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-150"
                    style={{ backgroundColor: channel.color }}
                  />
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <channel.icon
                      className="w-7 h-7 text-white/70 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white mb-1">
                  {channel.name}
                </h3>
                <p className="text-xs text-gray-500">{channel.label}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div variants={fadeInUp}>
            <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <HiOutlineBolt className="w-5 h-5 text-white/70" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Start a Project
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
                    From AI-powered platforms to enterprise cloud deployments — Kaelux
                    delivers end-to-end solutions tailored to your scale.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/solutions#contact-form"
                      className="group relative px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-base font-semibold overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 flex items-center gap-2 whitespace-nowrap"
                    >
                      Request a Proposal
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>

                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white font-medium text-base border border-white/10 rounded-full px-6 py-4 hover:border-white/20 transition-all duration-300 text-center whitespace-nowrap"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Status */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-gray-500 font-medium">
              Accepting new projects
            </span>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kaelux. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
