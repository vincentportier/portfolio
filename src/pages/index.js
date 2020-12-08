import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/sections/hero"

const StyledContent = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 150px;
  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 25px;
  }
`

export default function Home() {
  return (
    <Layout>
      <StyledContent>
        <Hero />
      </StyledContent>
    </Layout>
  )
}
