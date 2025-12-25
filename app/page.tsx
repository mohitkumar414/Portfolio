"use client";
import Image from "next/image";
import LeetCodeIcon from "./components/LeetCodeIcon";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center bg-[#0a0a0a]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* === LEFT SIDE (Profile - Made slightly narrower: col-span-4) === */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-8">

          {/* Profile Picture */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden 
                border-4 border-gray-800 shadow-2xl 
                transition-all duration-300 
                hover:border-cyan-400 
                hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            <Image
              src="/profile.jpg"
              alt="Mohit Kumar"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Mohit Kumar Lottla</h1>
            <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm">
              Full-Stack Developer focused on building<br />
              AI-powered, scalable web applications.<br />
              Turning complex problems into clean systems.
            </p>
          </div>

          {/* Social Icons with Tooltips */}
          <div className="flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/mohit-kumar-lottla-21767a2a4/"
              label="LinkedIn"
              icon={<LinkedinIcon className="w-5.5 h-5.5" />}
            />
            <SocialLink
              href="https://github.com/mohitkumar414"
              label="GitHub"
              icon={<GithubIcon className="w-5.5 h-5.5" />}
            />
            <SocialLink
              href="https://leetcode.com/u/mohit414/"
              label="LeetCode"
              icon={<LeetCodeIcon className="w-5.5 h-5.5" />}
            />
            <SocialLink
              href="https://x.com/MohitKumar2732"
              label="Twitter"
              icon={<TwitterIcon className="w-5.5 h-5.5" />}
            />
          </div>
        </div>

        {/* === RIGHT SIDE (About Me - Expanded: col-span-8) === */}
        <div className="md:col-span-8 w-full">
          <div className="bg-gray-900/40 p-10 rounded-3xl border border-gray-800 backdrop-blur-sm shadow-xl">
            <h2 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-400"></span>
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a B.Tech Information Technology undergraduate, <strong>graduating in 2026</strong>, with a strong focus on <strong>full-stack web development</strong>. I build end-to-end web applications using modern frameworks like <strong>Next.js</strong> and <strong>TypeScript</strong>, with hands-on experience integrating <strong>AI features</strong>, <strong>Google OAuth</strong> authentication, and media pipelines using <strong>ImageKit</strong>. My work emphasizes clean architecture, performance, and building systems that solve real user problems rather than just showcasing features.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              Recently, I've been working on <strong>NoteForge AI</strong>, a platform aimed at reducing fragmentation in technical education by generating structured, exam-oriented study material using AI. I enjoy working across the stack—from backend logic and APIs to polished, intuitive user interfaces—and I'm continuously improving my engineering depth through practical projects and system-level understanding.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

// === NEW HELPER COMPONENT WITH TOOLTIP ===
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 bg-gray-900 text-gray-400 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 border border-gray-800"
    >
      {/* The Icon */}
      {icon}

      {/* The Tooltip Label */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
        {label}
        {/* Tiny arrow pointing down */}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-r border-b border-gray-700 transform translate-y-[-50%]"></span>
      </span>
    </a>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}