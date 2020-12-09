import React from "react"
import styled from "styled-components"
import Project from "../Project"
import { projects } from "../../config"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="numbered-heading">My projects</h2>
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
            />
          ))}
      </div>
    </section>
  )
}

export default Projects
