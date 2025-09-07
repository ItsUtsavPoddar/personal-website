"use client";

import { useState, useRef, useEffect } from "react";
import { WhatIDoCard } from "@/components/what-i-do-card";
import { Switch } from "@/components/ui/switch";
import { SectionHeading } from "@/components/section-heading";

const whatIDo = [
  {
    title: "Astronomy",
    description: "Stargazing, astrophotography, and sharing cosmic wonders.",
    highlights: [
      "Spot the International Space Station",
      "Astrophotography tips",
    ],
    video: "/astronomy.mp4",
    links: [{ label: "Website coming soon", url: "https://utsv.tech/" }],
    image: "/icons/astronomy.png",
    content: [
      {
        type: "blog",
        label: "Tracking the ISS (Coming Soon)",
        url: "/",
      },
    ],
  },
  // Gardening
  {
    title: "Gardening",
    description: "The longer you spend in tech, the stronger the urge to dig.",
    highlights: ["Gardening Journals", "Species' Records"],
    video: "/gardening.mp4",
    links: [{ label: "Website coming soon", url: "https://utsv.tech/" }],
    image: "/icons/gardening.png",
    content: [
      {
        type: "article",
        label: "My Garden Species (Coming Soon)",
        url: "/",
      },
    ],
  },
  // Blogging
  {
    title: "Blogging & Streaming",
    description:
      "Sharing insights, and stories from my journey. Streaming on Twitch.",
    highlights: ["Journaling my tech journey", "Building an audience"],
    video: "/blogStream.mp4",
    links: [
      { label: "Blogs' Website Coming Soon", url: "/  " },
      { label: "Twitch", url: "https://twitch.com/itsutsav" },
    ],
    image: "/icons/blogging.png",
    content: [
      {
        type: "blog",
        label: "Satellite Tracker Build Story (Coming Soon)",
        url: "/",
      },
    ],
  },
];

export function WhatIDoSection() {
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
        }
      }
    });
  }, [autoplayMode, hoveredIndex]);

  return (
    <section id="what-i-do" className="py-32 relative">
      <div className="container relative z-10">
        <SectionHeading
          title="What I Do"
          subtitle="A glimpse into my passions and expertise"
          subsubtitle="Apart from Software Development"
        />
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
          {whatIDo.map((card, idx) => (
            <div
              key={card.title}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <WhatIDoCard
                {...card}
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
