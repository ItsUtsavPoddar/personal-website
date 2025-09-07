"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Associate Software Engineer - Quality COP Team",
    company: "NielsenIQ",
    period: "Mar 2025 - Present (Started as SWE Intern in Summer 2025)",
    description: [
      "Part of a central COP team building and maintaining frameworks used by 200+ dev teams across NielsenIQ.",
      "Contributed to the core Java automation framework, now expanding ownership to TypeScript and Python frameworks for UI and API testing.",
      "Focus on creating scalable, reusable tools that integrate with CI / CD pipelines, Grafana dashboards, and Zephyr reporting.",
    ],
    level: 1,
  },
  {
    title: "Founder & Lead Developer",
    company: "EdTech Platform (Self-initiated Startup)",
    period: "2024 - Present",
    description: [
      "Designed and developed a full-stack SaaS platform tailored for coaching institutes and educators.",
      "Led product architecture, built scalable frontend and backend systems, and iterated features based on real user needs.",
      "Currently expanding the platform into a generalised service to be deployed across institutions.",
    ],
    level: 1,
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
                {Array.isArray(experience.description) ? (
                  <ul className="list-disc list-inside text-zinc-300 space-y-2">
                    {experience.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-zinc-300">{experience.description}</p>
                )}
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
