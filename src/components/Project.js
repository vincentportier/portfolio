import React from "react"
import styled from "styled-components"
import Icon from "./icons/icon"

const StyledProject = styled.div``

const Project = ({
  title,
  description,
  technologies,
  github,
  external,
  image,
}) => {
  return (
    <StyledProject>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-description">{description}</div>
        {technologies.length && (
          <ul className="project-tech-list">
            {technologies.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {github && (
            <a href={github} aria-label="Github link">
              <Icon name="Github" />
            </a>
          )}
          {external && (
            <a href={external} aria-label="Github link">
              <Icon name="External" />
            </a>
          )}
        </div>
      </div>
      <div className="project-image">
        <a href={external ? external : github ? github : "#"}>
          <img src={image} alt={title} className="img" />
        </a>
      </div>
    </StyledProject>
  )
}

export default Project
