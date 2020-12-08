import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"

const StyledContent = styled.main``

export default function Home() {
  return (
    <Layout>
      <StyledContent className="fillHeight">
        <Hero />
      </StyledContent>
    </Layout>
  )
}
