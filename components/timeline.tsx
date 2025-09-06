"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "NielsenIQ",
    period: "Mar 2025 - Present",
    description:
      "Developed responsive web applications using React and TypeScript. Collaborated with designers and backend engineers to deliver high-quality products.",
    level: 1,
  },
  {
    title: "Founder & Lead Developer",
    company: "Service Agency",
    period: "2025 - Present",
    description:
      "Lead the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
    level: 1,
  },
  {
    title: "Intern",
    company: "NielsenIQ",
    period: "2025 (Summer)",
    description:
      "Assisted in developing web applications and learned modern web development practices.",
  },
  {
    title: "Freelance Software Developer",
    company: "Pinak Enterprises",
    period: "2023 - 2024",
    description:
      "Developed custom software solutions for small businesses, including web applications and automation tools.",
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${
              index % 2 === 0 ? "md:pl-10" : "md:pr-10"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-neutral-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
