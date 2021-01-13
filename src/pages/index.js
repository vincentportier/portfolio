import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Featured from "../components/sections/featured"
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
          <Featured />
          <Contact />
        </StyledContent>
      </Layout>
    </DarkModeProvider>
  )
}
