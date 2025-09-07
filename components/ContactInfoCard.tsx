"use client";
import Link from "next/link";
import { Mail, Linkedin, Github, Copy } from "lucide-react";

export function ContactInfoCard() {
  return (
    <div className="space-y-6">
      {/* Email */}
      <div className="flex items-center gap-4 hover:bg-zinc-900 rounded-lg p-2 transition">
        <Link
          href="mailto:utsavpoddar002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
            <Mail className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-zinc-500">Email</div>
            <div className="font-medium select-text">
              utsavpoddar002@gmail.com
            </div>
          </div>
        </Link>
        <button
          className="ml-2 p-2 rounded hover:bg-zinc-800 transition"
          onClick={() =>
            navigator.clipboard.writeText("utsavpoddar002@gmail.com")
          }
          title="Copy Email"
        >
          <Copy className="h-4 w-4 text-zinc-400" />
        </button>
      </div>
      {/* LinkedIn */}
      <div className="flex items-center gap-4 hover:bg-zinc-900 rounded-lg p-2 transition">
        <Link
          href="https://www.linkedin.com/in/itsutsavpoddar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
            <Linkedin className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-zinc-500">LinkedIn</div>
            <div className="font-medium select-text">
              linkedin.com/in/itsutsavpoddar
            </div>
          </div>
        </Link>
        <button
          className="ml-2 p-2 rounded hover:bg-zinc-800 transition"
          onClick={() =>
            navigator.clipboard.writeText("linkedin.com/in/itsutsavpoddar")
          }
          title="Copy LinkedIn"
        >
          <Copy className="h-4 w-4 text-zinc-400" />
        </button>
      </div>
      {/* GitHub */}
      <div className="flex items-center gap-4 hover:bg-zinc-900 rounded-lg p-2 transition">
        <Link
          href="https://github.com/itsutsavpoddar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
            <Github className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-zinc-500">GitHub</div>
            <div className="font-medium select-text">
              github.com/itsutsavpoddar
            </div>
          </div>
        </Link>
        <button
          className="ml-2 p-2 rounded hover:bg-zinc-800 transition"
          onClick={() =>
            navigator.clipboard.writeText("github.com/itsutsavpoddar")
          }
          title="Copy GitHub"
        >
          <Copy className="h-4 w-4 text-zinc-400" />
        </button>
      </div>
    </div>
  );
}
