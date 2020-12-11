import React, { useRef, useEffect } from "react"
import Project from "../Project"
import { projects } from "../../config"
import sr from "../../utils/sr"
import { srConfig } from "../../config"

const Projects = () => {
  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig(400))
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(500 + i * 100, 0.3))
    )
  }, [])

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        My projects
      </h2>
      <div>
        {projects &&
          projects.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              external={project.external}
              image={project.image}
              myRef={project => (revealProjects.current[i] = project)}
            />
          ))}
      </div>
    </section>
  )
}

export default Projects
