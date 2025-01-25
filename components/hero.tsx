"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "./ui/background-beams"
import { TypewriterEffect } from "./ui/typewriter-effect"

export function Hero() {
  const words = [
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer",
    },
  ]

  return (
    <section id="home" className="h-screen relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">Hi, I'm Sahil Suman</h1>
          <div className="mb-8">
            <TypewriterEffect words={words} />
          </div>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable web applications and solving complex problems.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/sahilsuman11/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/SahilSuman1011"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  )
}

