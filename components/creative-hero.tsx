"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dprRef = useRef(1);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let t = 0;
    let stars: Star[] = [];
    let ro: ResizeObserver | null = null;

    class Star {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      size: number;
      twinkleSpeed: number;
      phase: number;

      constructor(x: number, y: number, z: number) {
        this.baseX = x;
        this.baseY = y;
        this.z = z; // depth 0..1
        this.x = x;
        this.y = y;
        this.size = 0.6 + z * 1.6;
        this.twinkleSpeed = 0.5 + Math.random() * 1.5;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        const parallax = 15 * this.z;
        this.x = this.baseX + ((mouse.current.x - width / 2) / 100) * parallax;
        this.y = this.baseY + ((mouse.current.y - height / 2) / 100) * parallax;
      }

      draw() {
        const alpha = 0.4 + 0.6 * Math.sin(t * this.twinkleSpeed + this.phase);

        ctx.save();
        ctx.globalCompositeOperation = "lighter";

        // Glow dot
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.shadowBlur = 8 + this.z * 20;
        ctx.shadowColor = "rgba(180,200,255,0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Small cross to feel like a star
        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.x - this.size * 1.5, this.y);
        ctx.lineTo(this.x + this.size * 1.5, this.y);
        ctx.moveTo(this.x, this.y - this.size * 1.5);
        ctx.lineTo(this.x, this.y + this.size * 1.5);
        ctx.stroke();

        ctx.restore();
      }
    }

    const init = () => {
      stars = [];
      const count = Math.floor((width * height) / 8000);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const z = Math.random();
        stars.push(new Star(x, y, z));
      }
    };

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      dprRef.current = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(width * dprRef.current);
      canvas.height = Math.floor(height * dprRef.current);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dprRef.current, dprRef.current);
      init();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.tx = e.clientX - rect.left;
      mouse.current.ty = e.clientY - rect.top;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.tx = e.touches[0].clientX - rect.left;
      mouse.current.ty = e.touches[0].clientY - rect.top;
    };

    const animate = () => {
      t += 0.016;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.update();
        s.draw();
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    setSize();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      ro?.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900/50 to-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Stars canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="container relative z-10 text-center space-y-8 px-6">
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="relative z-10">
              Software Engineer & Creative Developer
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="block">Hi, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-cyan-600">
            Utsav Poddar
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I craft exceptional digital experiences with code, creativity, and a
          passion for innovation.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-lg px-8 py-6">
            <span className="relative z-10 flex items-center">
              View Projects{" "}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500 text-lg px-8 py-6"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <Link
            href="https://github.com/itsutsavpoddar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white h-12 w-12"
            >
              <Github className="h-6 w-6" />
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
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white h-12 w-12"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:utsavpoddar002@gmail.com" target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white h-12 w-12"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
