"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface WhatIDoCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  highlights?: string[];
  links?: { label: string; url: string }[];
  content?: { type: string; label: string; url: string }[]; // NEW
  autoplayMode?: "all" | "hover";
  videoRef?: (el: HTMLVideoElement | null) => void;
  isHovered?: boolean;
}

export function WhatIDoCard({
  title,
  description,
  image,
  video,
  highlights,
  links,
  autoplayMode = "all",
  videoRef,
  isHovered,
  content,
}: WhatIDoCardProps) {
  const [isHoveredState, setIsHoveredState] = useState(false);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHoveredState(true);
    if (autoplayMode === "hover" && videoElementRef.current) {
      videoElementRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHoveredState(false);
    if (autoplayMode === "hover" && videoElementRef.current) {
      videoElementRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-neutral-500/50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            {video ? (
              <video
                ref={videoRef || videoElementRef}
                src={video}
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isHovered || isHoveredState ? "scale-110" : "scale-100"
                }`}
                autoPlay={
                  autoplayMode === "all" ||
                  (autoplayMode === "hover" && (isHovered || isHoveredState))
                }
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isHovered || isHoveredState ? "scale-110" : "scale-100"
                }`}
              />
            )}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>
            {highlights && (
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1 pl-2">
                {highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            {links && (
              <div className="flex flex-wrap gap-2 mb-4">
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 rounded-full bg-neutral-300/20 text-cyan-400 hover:bg-gray-700/30 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            {content && content.length > 0 && (
              <div className="max-h-40 overflow-y-auto mb-4 border-t border-zinc-700 pt-4">
                <h4 className="font-semibold mb-2 text-neutral-400">
                  Featured Content :-
                </h4>
                <ul className="space-y-2">
                  {content.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="italic font-semibold text-zinc-100 hover:text-zinc-500"
                      >
                        {item.label}
                        <span className="ml-2 text-md text-zinc-500">
                          {item.type}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${
                isHovered || isHoveredState ? "bg-green-500" : "bg-zinc-500"
              } transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
