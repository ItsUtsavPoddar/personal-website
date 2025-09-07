import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { WhatIDoCard } from "@/components/what-i-do-card";
import { ProjectsSection } from "@/components/project-section";
import { WhatIDoSection } from "@/components/whatIDo-section";
import { TechStackIcons } from "@/components/tech-stack-icons";
import { ContactInfoCard } from "@/components/ContactInfoCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      {/* <MouseFollower /> */}
      <ScrollProgress />
      <FloatingNav />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-sky-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block text-white mb-2 text-4xl md:text-6xl lg:text-7xl">
                  Hi, I'm
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-cyan-600">
                  Utsav Poddar
                </span>
              </h1>
              {/* Badge */}
              <div className="inline-block">
                <div className="relative px-8 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="relative z-10">
                    Software Engineer & Gardener
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-gray-500/20 animate-pulse"></span>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Code, creativity, and a passion for innovation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-gray-700 to-cyan-700 border-0 hover:scale-105 transition-transform"
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 text-cyan-700 hover:text-cyan-700 hover:border-zinc-500 hover:scale-105 transition-transform"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <Link
                href="https://github.com/itsutsavpoddar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/itsutsavpoddar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:utsavpoddar002@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neutral-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/utsav.jpeg?height=600&width=600"
                  alt="Utsav Poddar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    {/* <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a software engineer with a passion for exploring
                  technology and building things that solve real problems. My
                  work spans backend systems, databases, and frontend
                  interfaces, giving me a full-stack perspective.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  What drives me most is curiosity — whether it's experimenting
                  with new tools, diving into research, or fine-tuning a system
                  until it feels just right. I enjoy projects that balance
                  technical depth with practical impact.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Beyond code, I value collaboration, continuous learning, and
                  creating work that leaves a mark. For me, engineering isn't
                  just about writing programs — it's about shaping ideas into
                  experiences that matter.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Utsav Poddar</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm break-all">
                      utsavpoddar002@gmail.com
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white w-full sm:w-auto">
                    <a
                      href="https://docs.google.com/document/export?format=pdf&id=14bI1Vrw7w-y4iJ-hI75nKlLTrxkS7fIy1Wj-a72hgJQ&tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <WhatIDoSection />

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="container relative z-10">
          <SectionHeading
            title="Tech Stack"
            subtitle="Tools & technologies I use"
          />
          <TechStackIcons />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <>
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Work Experience"
              subtitle="My professional journey"
            />

            <div className="mt-16">
              <Timeline />
            </div>
          </div>
        </>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16"> */}
          {/* WHEN WE ENABEL CONTACT FORM. USE THE ABOVE LINE */}
          <div className="flex justify-center items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ContactInfoCard />

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                  <span>
                    If opportunities are right, I'm open to collaborations and
                    new projects.
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            {/* <ContactForm /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div>
        <footer className="border-t border-zinc-800 py-10">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              {/* <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shine
              </span>
              <span className="text-white">KKA</span>
            </Link> */}
              <p className="text-sm text-zinc-500 mt-2">
                © {new Date().getFullYear()} Utsav Poddar. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com/itsutsavpoddar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/itsutsavpoddar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="mailto:utsavpoddar002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
