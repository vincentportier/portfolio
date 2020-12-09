import React from "react"
import styled from "styled-components"
import Icon from "./icons/icon"

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  .project-content {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 1 / 8;
    padding: 25px;
  }
  .project-image {
    grid-column: 8 / -1;
  }
  .header {
    ${({ theme }) => theme.mixins.flexBetween}
    align-items:center;
    margin: 0 0 20px 0;
  }
  .project-title {
    color: var(--red);
    font-size: clamp(24px, 5vw, 28px);
    margin: 0;
  }
  .project-description {
    position: relative;
    background-color: var(--white);
    border-radius: var(--border-radius);
    color: var(--black);
    font-size: var(--fz-xs);
    line-height: 1.6;
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    position: relative;
    padding: 0;
    margin: 20px 0 10px;
    li {
      margin: 0 20px 5px 0;
      font-family: monospace;
      font-size: var(--fz-xs);
      color: var(--red);
      white-space: nonwrap;
    }
  }
  .project-links {
    display: flex;
    position: relative;
    color: var(--black);

    svg {
      margin: 0 10px 0 0;
      width: 20px;
      height: 20px;
    }
  }
`

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
        <div className="header">
          <h3 className="project-title">{title}</h3>
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
        <div className="project-description">{description}</div>
        {technologies.length && (
          <ul className="project-tech-list">
            {technologies.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))}
          </ul>
        )}
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
