import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Blogs } from "@/components/sections/blogs"
import { TechScroll } from "@/components/ui/tech-scroll"

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <TechScroll />
      <Contact />
      <Footer />
    </>
  )
}

