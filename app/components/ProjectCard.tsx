"use client";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "../page";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  videoPath: string;
}

export default function ProjectCard({ title, description, tags, links, videoPath }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-900/20 border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300"
    >
      {/* === VIDEO PLAYER SECTION === */}
      <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-black aspect-video group">
        <video 
          src={videoPath}
          controls 
          preload="metadata"
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* === CONTENT SECTION === */}
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a 
            href={links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={18} /> Live Link
          </a>
          <a 
            href={links.repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <GithubIcon className="w-5.5 h-5.5" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}