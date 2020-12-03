import React from "react"
import { navLinks } from "../config"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

//this is how you use theme in the styled components ${({theme}) => ... }

const StyledHeader = styled.header``
const StyledNav = styled.nav``
const StyledLinks = styled.div``

const Nav = props => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <span>Vincent Portier</span>
          <ul>
            {navLinks.map(({ name, url }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  )
}

export default Nav
