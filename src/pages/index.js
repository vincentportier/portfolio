import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import { DarkModeProvider } from "../context/index"

const StyledContent = styled.main`
  counter-reset: section;
`

export default function Home() {
  return (
    <DarkModeProvider>
      <Layout>
        <StyledContent className="fillHeight">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </StyledContent>
      </Layout>
    </DarkModeProvider>
  )
}
