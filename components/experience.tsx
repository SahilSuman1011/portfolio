"use client"

import { motion } from "framer-motion"
import { TracingBeam } from "./ui/tracing-beam"

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Kestra Software",
    date: "Aug 2023 - Present",
    description: [
      "Developed and maintained AutoComm, a communication automation platform",
      "Implemented real-time chat functionality using Socket.io",
      "Integrated OpenAI APIs for automated responses",
      "Improved application performance by 40%",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Kestra Software",
    date: "Jan 2023 - Jul 2023",
    description: [
      "Built responsive web applications using React and Next.js",
      "Implemented user authentication and authorization",
      "Developed RESTful APIs using Node.js and Express",
      "Worked with MongoDB for database management",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <TracingBeam>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {experience.company} • {experience.date}
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}

