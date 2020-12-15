import React, { useState } from "react"
import { navLinks } from "../config"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import Menu from "./menu"
import { useScrollDirection } from "../hooks/index"
import { useEffect } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { loaderDelay } from "../utils/index"
import DarkMode from "./darkmode"

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
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);

  ${props =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-height-scroll);
      transform: translateY(0px);
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 9px 0px;
    `};

  ${props =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-height-scroll);
      transform: translateY(calc(var(--nav-height-scroll) * -1));
    `};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mixins.flexBetween}
`

const StyledLogo = styled(Link)`
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
      margin: 0 15px;
      position: relative;
      counter-increment: item 1;
    }
    a {
      padding: 10px;
      font-size: var(--fz-md);
      &:before {
        content: "0" counter(item) ".";
        margin-right: 10px;
        color: var(--red);
        font-size: var(--fz-xs);
        font-family: monospace;
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

const Nav = ({ onToggleDarkMode, darkMode }) => {
  const scrollDirection = useScrollDirection("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const handleScroll = e => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  const timeout = loaderDelay

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={timeout}>
              <StyledLogo to="/">VP</StyledLogo>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ul>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ name, url }, i) => (
                  <CSSTransition
                    key={i}
                    timeout={timeout}
                    classNames="fadedown"
                  >
                    <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ul>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={timeout}>
                <div style={{ transitionDelay: `${navLinks.length * 100}ms` }}>
                  <a
                    href="/resume.pdf"
                    className="resume-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
          <DarkMode onToggleDarkMode={onToggleDarkMode} darkMode={darkMode} />
        </StyledLinks>
      </StyledNav>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={timeout} classNames="fadedown">
            <Menu onToggleDarkMode={onToggleDarkMode} darkMode={darkMode} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledHeader>
  )
}

export default Nav
