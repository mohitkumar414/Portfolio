"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Folder } from "lucide-react";
import { GithubIcon } from "../page";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-500">Work</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A collection of projects where I've engineered full-stack systems,
            solved real user problems, and experimented with new technologies.
          </p>
        </motion.div>

        {/* === SECTION 1: FLAGSHIP PROJECTS === */}
        <div className="space-y-16 mb-24">
          <ProjectCard
            title="NoteForge AI"
            description="Designed to solve the scarcity of structured study materials, NoteForge AI empowers engineering students by instantly generating exam-oriented notes and model question papers based on their specific university syllabus. The platform enhances accessibility through an interactive 'Reader Mode' with synchronous audio highlighting and offers comprehensive progress tracking. It bridges the gap between complex curriculums and effective revision through intelligent automation."
            tags={["Next.js 16", "TypeScript", "MongoDB", "Gemini API"]}
            links={{
              demo: "https://note-forge-ai-brown.vercel.app/",
              repo: "https://github.com/mohitkumar414/NoteForge-AI"
            }}
            videoPath="/noteforge-demo.mp4"
          />
        </div>

        <div className="space-y-16 mb-24">
          <ProjectCard
            title="VideoFeed"
            description="VideoFeed is a high-performance, full-stack video platform that features a cinematic, dark-themed UI. Users enjoy an immersive experience with 'Netflix-style' playback, including silent video previews on hover and instant emoji reactions powered by optimistic updates. The app ensures secure content management through NextAuth authentication, allowing creators full control over their uploads while delivering smooth, optimized video streaming via ImageKit."
            tags={["Next.js 15", "TypeScript", "MongoDB", "ImageKit"]}
            links={{
              demo: "https://video-feed-virid.vercel.app/feed",
              repo: "https://github.com/mohitkumar414/VideoFeed"
            }}
            videoPath="/videofeed-demo.mp4"
          />
        </div>

        {/* === SECTION 2: SMALLER PROJECTS (Code remains the same) === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Folder className="text-blue-500" />
            Other Notable Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Small Project 1 */}
            <SmallProjectCard
              title="Authentication System"
              description="A full Authentication System with Next.js 13 including: user signup & login, email verification with Nodemailer, JWT-based authentication, password Reset functionality, protected routes & profile pages"
              stack={["Next.js 13", "NextAuth", "TypeScript", "MongoDB", "Nodemailer"]}
              link="https://github.com/mohitkumar414/Auth_system_nextjs"
            />

            {/* Small Project 1 */}
            {/* <SmallProjectCard
              title="Weather App"
              description="A real-time weather dashboard using OpenWeatherMap API and React."
              stack={["React", "API Integration"]}
              link="https://github.com/your-username/weather"
            /> */}
          </div>
        </motion.div>

      </div>
    </main>
  );
}

// SmallProjectCard Helper
function SmallProjectCard({ title, description, stack, link }: { title: string, description: string, stack: string[], link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gray-900/30 border border-gray-800 rounded-2xl hover:bg-gray-900 hover:border-blue-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <GithubIcon className="w-5.5 h-5.5" />
      </div>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="text-xs font-medium text-gray-500">{tech}</span>
        ))}
      </div>
    </a>
  );
}