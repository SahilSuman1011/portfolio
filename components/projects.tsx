"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./ui/card-hover-effect"

const projects = [
  {
    title: "StudyNotion",
    description: "An edtech platform with course management and learning features",
    link: "https://studynotion-frontend.vercel.app/",
  },
  {
    title: "AutoComm",
    description: "Communication automation platform with real-time chat and AI integration",
    link: "https://kestra-autocomm.vercel.app/",
  },
  {
    title: "Car Rental System",
    description: "Full-stack car rental management system",
    link: "https://github.com/SahilSuman1011/Car-Rental-System",
  },
  {
    title: "URL Shortener",
    description: "URL shortening service with analytics",
    link: "https://github.com/SahilSuman1011/url-shortener",
  },
  {
    title: "Dev Detective",
    description: "GitHub profile analyzer and statistics viewer",
    link: "https://sahilsuman1011.github.io/Dev-Detective-App/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}

