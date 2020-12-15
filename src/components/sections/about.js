import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { skills } from "../../config"
import sr from "../../utils/sr"
import { srConfig } from "../../config"
import { useEffect, useRef } from "react"

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`
const StyledText = styled.div`
  font-size: var(--fz-md);
  p {
    margin: 0 0 15px 0;
    line-height: 1.6;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-size: var(--fz-md);
      font-family: monospace;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        top: 2px;
        color: var(--red);
        font-size: var(--fz-xs);
      }
    }
  }
`
const StyledAvatar = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      border: 2px solid var(--red);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "avatar.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, traceSVG: { color: "#FFFFFF" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const revealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <StyledAboutSection id="about" className="about" ref={revealContainer}>
      <h2 className="numbered-heading">About me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I'm Vincent, a French software developer.</p>
            <p>
              I've always been fascinated by the web, which is why, after having
              spent the last 7 years as an accomplished Event Manager, I have
              decided to transition my career to the Tech Industry.
            </p>
            <p>
              I am a problem solver who enjoys creating things that live on the
              internet, whether that be websites, applications, or anything in
              between and I am seeking a full-time opportunity to leverage my
              JavaScript and React knowledge.
            </p>
            <p>
              I'm an outdoor lover, hobbyist photographer, and also a bit of a
              boardgame fanatic.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledAvatar>
          <div className="wrapper">
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              alt="avatar"
              className="img"
            />
          </div>
        </StyledAvatar>
      </div>
    </StyledAboutSection>
  )
}

export default About
