import React from "react"
import styled from "styled-components"
import Icon from "./icons/icon"
import Img from "gatsby-image"

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

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 /-1;
        padding: 40px 25px 10px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }
    .header {
      justify-content: flex-end;
    }

    .project-links {
      justify-content: flex-end;
    }

    .project-image {
      grid-column: 1 / 8;
      display: inline-block;

      a {
        width: 100%;
      }

      .image-wrapper {
        width: 100%;
        height: auto;
        transition: ease-in-out 0.25s;

        &:hover {
          transform: translateX(-50px);
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .project-content {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    padding: 15px 20px;
    background-color: var(--white);
    z-index: 3;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      grid-column: 1/-1;
      z-index: 5;
      background: transparent;
      /* padding */
    }
    @media (max-width: 480px) {
      /* padding */
    }
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
  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    display: inline-block;

    a {
      width: 100%;
    }
    @media (max-width: 768px) {
      display: none;
    }
    .image-wrapper {
      width: 100%;
      height: auto;
      border-radius: var(--border-radius);
      transition: ease-in-out 0.25s;
      &:hover {
        transform: translateX(50px);
      }
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
  myRef,
}) => {
  console.log(image)
  return (
    <StyledProject ref={myRef}>
      <div className="project-content">
        <div className="header">
          <a
            href={external ? external : github ? github : "#"}
            aria-label="Github link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">{title}</h3>
          </a>
        </div>
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {technologies.length && (
          <ul className="project-tech-list">
            {technologies.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))}
          </ul>
        )}
        <div className="project-links">
          {github && (
            <a
              href={github}
              aria-label="Github link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Github" />
            </a>
          )}
          {external && (
            <a
              href={external}
              aria-label="Github link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="External" />
            </a>
          )}
        </div>
      </div>
      <div className="project-image">
        <a
          href={external ? external : github ? github : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {image && (
            <Img
              fluid={image.childImageSharp.fluid}
              className="image-wrapper"
            />
          )}
        </a>
      </div>
    </StyledProject>
  )
}

export default Project
