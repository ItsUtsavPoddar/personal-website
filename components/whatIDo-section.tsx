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
    links: [
      { label: "Website coming soon", url: "https://utsv.tech/astronomy" },
    ],
    image: "/icons/astronomy.png",
    content: [
      {
        type: "blog",
        label: "Tracking the ISS (Coming Soon)",
        url: "/blog/iss-tracking",
      },
    ],
  },
  // Gardening
  {
    title: "Gardening",
    description: "Cultivating plants, flowers, and a love for nature.",
    highlights: [
      "Indoor gardening tips",
      "Seasonal planting guides",
      "Sustainable practices",
    ],
    video: "/gardening.mp4",
    links: [
      { label: "Blog", url: "https://yourblog.com/gardening" },
      { label: "Instagram", url: "https://instagram.com/yourgarden" },
    ],
    image: "/icons/gardening.png",
    content: [
      {
        type: "blog",
        label: "Top 10 Houseplants",
        url: "/blog/houseplants",
      },
      {
        type: "article",
        label: "Companion Planting",
        url: "/articles/companion-planting",
      },
      {
        type: "link",
        label: "Garden Design Ideas",
        url: "https://yourgarden.com/design-ideas",
      },
    ],
  },
  // Blogging
  {
    title: "Blogging & Streaming",
    description: "Sharing insights, tips, and stories from my journey.",
    highlights: [
      "Writing tutorials",
      "Content creation tips",
      "Building an audience",
    ],
    video: "/blogStream.mp4",
    links: [
      { label: "Blog", url: "https://yourblog.com" },
      { label: "Twitch", url: "https://twitch.com/itsutsav" },
    ],
    image: "/icons/blogging.png",
    content: [
      {
        type: "blog",
        label: "How to Start a Blog",
        url: "/blog/start-a-blog",
      },
      {
        type: "article",
        label: "10 Tips for Writing Engaging Content",
        url: "/articles/writing-tips",
      },
      {
        type: "link",
        label: "Content Creation Resources",
        url: "https://yourblog.com/resources",
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
