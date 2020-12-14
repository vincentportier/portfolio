import React from "react"
import Side from "./side"
import styled from "styled-components"
import { socialMedia } from "../config"
import Icon from "./icons/icon"

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-grey);
  }

  li {
    padding: 10px;

    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`

const Social = () => {
  return (
    <Side orientation="left">
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </Side>
  )
}

export default Social
