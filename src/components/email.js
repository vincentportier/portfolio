import React from "react"
import Side from "./side"
import styled from "styled-components"
import { email } from "../config"

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-grey);
  }
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: monospace;
    font-size: var(--fz-xxs);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`

const Email = () => {
  return (
    <Side orientation="right">
      <StyledEmail>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledEmail>
    </Side>
  )
}

export default Email
