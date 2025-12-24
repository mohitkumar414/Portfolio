"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Download, ExternalLink } from "lucide-react";

// ✅ UPDATED DATA WITH YOUR SPECIFIC EXPERIENCE
const experiences = [
  {
    id: 1,
    role: "Full Stack Web Development",
    company: "Udemy",
    location: "Self-Paced",
    period: "2025",
    description: [
      "Completed a comprehensive bootcamp covering the entire web development lifecycle.",
      "Built multiple projects including landing pages, REST APIs, and dynamic frontends.",
      "Learned state management, responsive design, and database integration."
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Next.js", "MongoDB"],
    companyUrl: "https://udemy.com"
  },
  {
    id: 2,
    role: "Java Programming Intern",
    company: "CodSoft",
    location: "Remote",
    period: "2024",
    description: [
      "Developed robust Java applications including a Student Grade Calculator and Number Guessing Game.",
      "Implemented Object-Oriented Programming (OOP) principles to create modular and scalable code.",
      "Debugged and optimized existing codebases, improving application runtime efficiency."
    ],
    skills: ["Java", "OOPs", "Application Development", "Debugging"],
    companyUrl: "https://www.codsoft.in/"
  },
  {
    id: 3,
    role: "Data Structures & Algorithms",
    company: "GeeksforGeeks",
    location: "Online",
    period: "2023 - 2024",
    description: [
      "Mastered core data structures (Arrays, Linked Lists, Trees, Graphs) and algorithms.",
      "Solved 500+ coding problems, consistently improving problem-solving speed and logic.",
      "Focus on time and space complexity analysis to write optimized solutions."
    ],
    skills: ["C++ / Java", "Algorithms", "Problem Solving", "Competitive Programming"],
    companyUrl: "https://geeksforgeeks.org"
  },
  {
    id: 4,
    role: "Hackathon Participant",
    company: "Smart India Hackathon (SIH)",
    location: "India",
    period: "2023",
    description: [
      "Collaborated with a team of 6 to solve a real-world problem statement under 36 hours.",
      "Developed a working prototype addressing government/ministry challenges.",
      "Gained experience in rapid prototyping, team coordination, and pitching technical solutions."
    ],
    skills: ["Teamwork", "Rapid Prototyping", "Innovation", "Pressure Handling"],
    companyUrl: "https://sih.gov.in"
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* === HEADER & RESUME BUTTON === */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-blue-500">Journey</span>
            </h1>
            <p className="text-gray-400 text-lg">
              My path of learning, building, and solving problems.
            </p>
          </motion.div>

          {/* Resume Download Button */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/resume.pdf" // 👈 Ensure resume.pdf is in your /public folder
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </div>

        {/* === TIMELINE SECTION === */}
        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>

              {/* Card Content */}
              <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors">

                {/* Role & Company Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-medium hover:underline flex items-center gap-1 mt-1"
                    >
                      {exp.company} <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Date & Location Badges */}
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}