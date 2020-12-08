import React from "react"
import styled from "styled-components"

const StyledHero = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`
const Hero = () => {
  return (
    <StyledHero>
      <p>THIS IS MY HERO SECTION</p>
      <p>THIS IS MY HERO SECTION</p>
      <p>THIS IS MY HERO SECTION</p>
      <p>THIS IS MY HERO SECTION</p>
      <p>THIS IS MY HERO SECTION</p>
      <p>THIS IS MY HERO SECTION</p>
      <p>THIS IS MY HERO SECTION</p>
    </StyledHero>
  )
}

export default Hero
