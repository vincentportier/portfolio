import React, { useState, useEffect } from "react"

import { CSSTransition, TransitionGroup } from "react-transition-group"
import { loaderDelay } from "../utils/index"
import styled from "styled-components"

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--light-grey);
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === "left" ? "20px" : "auto")};
    right: ${props => (props.orientation === "left" ? "auto" : "20px")};
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const Side = ({ children, orientation }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledSideElement orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fade" timeout={loaderDelay}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledSideElement>
  )
}

export default Side
