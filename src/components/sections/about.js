import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { skills } from "../../config"

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
    margin: 0;
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
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
