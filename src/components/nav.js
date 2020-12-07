import React from "react"
import { navLinks } from "../config"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Menu } from "./menu"

//this is how you use theme in the styled components ${({theme}) => ... }

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexCenter}
  position:fixed;
  top: 0px;
  z-index: 11;
  width: 100%;
  padding: 0px 50px;
  height: var(--nav-height);
  background: var(--white);
  transform: translateY(0px);
  transition: var(--transition);
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const StyledNav = styled.nav`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBetween}
`

const StyledLogo = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: var(--black);
  font-size: var(--fz-heading);
`
const StyledLinks = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  ul {
    ${({ theme }) => theme.mixins.flexCenter}
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
    }
    a {
      padding: 10px;
      font-size: var(--fz-xs);
      &:before {
        content: "0" counter(item) ".";
        margin-right: 10px;
        color: var(--red);
        font-size: var(--fz-xxs);
      }
    }
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton}
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Nav = props => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>VP</StyledLogo>
        <StyledLinks>
          <ul>
            {navLinks.map(({ name, url }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
          <div>
            <a href="/resume.pdf" className="resume-button" target="_blank">
              Resume
            </a>
          </div>
        </StyledLinks>
      </StyledNav>
      <Menu />
    </StyledHeader>
  )
}

export default Nav
