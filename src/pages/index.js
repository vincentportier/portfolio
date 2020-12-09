import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"

const StyledContent = styled.main`
  counter-reset: section;
`

export default function Home() {
  return (
    <Layout>
      <StyledContent className="fillHeight">
        <Hero />
        <About />
        <Projects />
      </StyledContent>
    </Layout>
  )
}
