import React, { useState } from "react"
import styled from "styled-components"

const StyledHamburger = styled.div``

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const activeClass = menuOpen ? "is-active" : null

  return (
    <StyledHamburger
      className={`hamburger hamburger--elastic ${activeClass}`}
      onClick={toggleMenu}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </StyledHamburger>
  )
}
