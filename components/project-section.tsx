"use client";

import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/project-card";
import { Switch } from "@/components/ui/switch";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    title: "Satellite Tracker",
    description:
      "Discover real-time positioning, height details, and track the next 80 minutes of their orbital path and beyond. It also features the passes and visibility of the satellites from any location on Earth.",
    tags: ["Next.js", "JavaScript", "Spring Boot", "SQL"],
    video: "/satellite_tracker.mp4",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://satellite.utsv.tech",
    repoUrl: "https://github.com/ItsUtsavPoddar/satellite-frontend",
    repoButtonText: "Case Study + Source Code",
    // blogUrl:
    //   "https://utsavpoddar.hashnode.dev/real-time-satellite-tracker-using-reactjs-and-spring-boot",
  },
  {
    title: "Parkinson's Disease Diagnosis Research Paper",
    description:
      "A comprehensive study on the early diagnosis of Parkinson's Disease using machine learning and Deep Learning techniques. Numerical and Graphical Feature Based Speech Analysis using Italian and MDVR-KCL datasets.",
    tags: ["Python", "Machine Learning", "Research", "Deep Learning"],
    video: "/research_parkisons.mp4",
    image: "/placeholder.svg?height=400&width=600",
    // demoUrl: "https://parkinsons.utsv.tech",
    repoUrl:
      "https://github.com/ItsUtsavPoddar/parkinsons-diagnosis-ai-research",
    repoButtonText: "Case Study + Source Code",
    // blogUrl:
    //   "https://utsavpoddar.hashnode.dev/parkinsons-disease-diagnosis-research-paper",
  },
  {
    title: "quickDrop",
    description:
      "A chat app with authentication, anonymous chat, and real-time messaging. Features room creation, message persistence, and a modern UI.",
    tags: ["React", "Socket.IO", "Node.js", "SQL", "Tailwind CSS", "Shadcn"],
    video: "/chatApp.mp4",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://chat.utsv.tech",
    repoUrl: "https://github.com/ItsUtsavPoddar/quickDrop-frontend",
    repoButtonText: "Case Study + Source Code",
    // blogUrl: "https://utsavpoddar.hashnode.dev/quickdrop-chat-app",
  },
  {
    title: "Paathshala - Institute Portal and Management System",
    description:
      "A comprehensive institute management system with features like student enrollment, attendance tracking, fee management, and performance analytics.",
    tags: ["Fast API", "Python", "NextJS", "MongoDB"],
    video: "/paathshala.mp4",
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "https://paathshalainstitute.in/",
    demoUrl2: "https://portal.paathshalainstitute.in/",
    demoUrlText: "Main Website",
    demoUrl2Text: "Portal & Management System",

    // repoUrl: "https://github.com/ItsUtsavPoddar/paathshala",
  },
];

export function ProjectsSection() {
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Effect to control video playback based on mode and hover
  // This will pause all videos except the hovered one in "hover" mode
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (autoplayMode === "all") {
        video.play();
      } else {
        if (hoveredIndex === idx) {
          video.play();
        } else {
          video.pause();
          //   video.currentTime = 0;
        }
      }
    });
  }, [autoplayMode, hoveredIndex]);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <div className="container relative z-10">
        <SectionHeading
          title="Flagship Projects"
          subtitle="Showcase of my skills and expertise"
          subsubtitle="A selection of my most notable works"
        />

        {/* Only Autoplay Toggle */}
        <div className="flex justify-center gap-6 my-8 ">
          <div className="flex items-center gap-2">
            <Switch
              id="autoplay-toggle"
              checked={autoplayMode === "all"}
              onCheckedChange={(checked) =>
                setAutoplayMode(checked ? "all" : "hover")
              }
            />
            <label htmlFor="autoplay-toggle" className="text-lg text-white/70">
              {autoplayMode === "all" ? "Autoplay All" : "Hover Autoplay"}
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard
                {...project}
                autoplayMode={autoplayMode}
                videoRef={(el: HTMLVideoElement | null) =>
                  (videoRefs.current[idx] = el)
                }
                isHovered={hoveredIndex === idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
