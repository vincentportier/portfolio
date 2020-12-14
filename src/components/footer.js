import React from "react"
import styled from "styled-components"
import { socialMedia } from "../config"
import Icon from "./icons/icon"

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`
const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 150px;
    margin: 0 auto 10px;
    color: var(--light-grey);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween}
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      padding: 10px;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const StyledCredits = styled.div`
  color: var(--light-grey);
  p {
    font-family: monospace;
    font-size: var(--fz-xxs);
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
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
        </ul>
      </StyledSocialLinks>
      <StyledCredits>
        <p>Website built by Vincent Portier</p>
      </StyledCredits>
    </StyledFooter>
  )
}

export default Footer
