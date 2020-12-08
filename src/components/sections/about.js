import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const StyledAboutSection = styled.section``
const StyledText = styled.div`
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
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "🧨";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`
const StyledAvatar = styled.div``

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "avatar.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800, traceSVG: { color: "#FFFFFF" }) {
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
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
            <li>skill list placeholder</li>
          </ul>
        </StyledText>
        <StyledAvatar>
          <Img
            fluid={data.avatar.childImageSharp.fluid}
            alt="avatar"
            className="img"
          />
        </StyledAvatar>
      </div>
    </StyledAboutSection>
  )
}

export default About
