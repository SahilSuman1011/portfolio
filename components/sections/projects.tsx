"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "../ui/card-hover-effect"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "StudyNotion",
    description:
      "An Edtech Platform with course management and learning features. Complete platform for online education with course creation, enrollment, and learning management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    demo: "https://studynotion-frontend.vercel.app/",
    github: "https://github.com/SahilSuman1011/StudyNotion",
  },
  {
    title: "AutoComm",
    description:
      "Community Engagement Platform with real-time chat and AI integration. Built for seamless communication and automated responses using advanced AI.",
    techStack: ["Next.js", "Kestra", "MongoDB", "Clerk"],
    demo: "https://kestra-autocomm.vercel.app/",
    github: "https://github.com/SahilSuman1011/Autocomm",
  },
  {
    title: "Car Rental System",
    description:
      "Full-stack car rental management system with real-time availability tracking and booking management. Built with C++ and MySQL for efficient data handling.",
    techStack: ["C++", "MySQL", "OOP"],
    github: "https://github.com/SahilSuman1011/Car-Rental-System",
  },
  {
    title: "URL Shortener",
    description:
      "URL shortening service with analytics tracking. Features include custom short URLs, click tracking, and geographic analytics using GeoIP.",
    techStack: ["TypeScript", "Node.js", "GeoIP", "MongoDB"],
    github: "https://github.com/SahilSuman1011/url-shortener",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-8">
      <div className="container max-w-3xl space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Projects
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CardHoverEffect>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-full hover:bg-white/10"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-full hover:bg-white/10"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/5 text-xs hover:bg-white/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

