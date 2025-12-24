"use client";
import { motion } from "framer-motion";
import { Code2, Database, Terminal, Cpu, Layout, Brain, GitBranch, PenTool } from "lucide-react";

// 🛠️ DATA: Edit this to match your exact expertise
const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="text-blue-500" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
  },
  {
    title: "Backend & Database",
    icon: <Database className="text-green-500" />,
    skills: ["Node.js", "Express", "MongoDB", "Mongoose", "PostgreSQL", "NextAuth.js", "REST APIs"]
  },
  {
    title: "AI & Data Engineering",
    icon: <Brain className="text-purple-500" />,
    skills: ["Python", "Gemini API", "Prompt Engineering", "RAG Pipelines", "Vector Databases"]
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="text-orange-500" />,
    skills: ["Git & GitHub", "Docker", "Postman", "Vercel", "VS Code", "Linux Basics"]
  },
  {
    title: "Core & IoT",
    icon: <Cpu className="text-red-500" />,
    skills: ["C++", "Data Structures", "OOPs", "Computer Networks", "Arduino", "IoT Protocols"]
  },
  {
    title: "Creative & Soft Skills",
    icon: <PenTool className="text-pink-500" />,
    skills: ["UI/UX Design", "Technical Writing", "Team Leadership", "Problem Solving"]
  }
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* === HEADER === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-500">Proficiency</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive overview of the technologies and tools I use to build scalable, 
            intelligent, and user-centric applications.
          </p>
        </motion.div>

        {/* === SKILLS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-gray-900/60 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-gray-400 bg-black/50 border border-gray-800 rounded-md hover:text-white hover:border-gray-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}