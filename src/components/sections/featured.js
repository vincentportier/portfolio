import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Project from "../Project"
import { projects } from "../../config"
import sr from "../../utils/sr"
import { srConfig } from "../../config"

const Featured = () => {
  const data = useStaticQuery(
    graphql`
      {
        featured: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/featured/" } }
          sort: { fields: [frontmatter___date], order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                title
                image
                technologies
                github
                external
              }
              html
            }
          }
        }
      }
    `
  )

  const featuredProjects = data.featured.edges.filter(({ node }) => node)

  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig())
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(500 + i * 100, 0.25))
    )
  }, [])

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        My projects
      </h2>
      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { title, image, technologies, github, external } = frontmatter
            return (
              <Project
                key={i}
                title={title}
                description={html}
                technologies={technologies}
                github={github}
                external={external}
                image={image}
                myRef={project => (revealProjects.current[i] = project)}
              />
            )
          })}
      </div>
    </section>
  )
}

export default Featured
