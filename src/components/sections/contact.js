import React, { useEffect, useRef } from "react"
import { email } from "../../config"
import styled from "styled-components"
import sr from "../../utils/sr"
import { srConfig } from "../../config"

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--red);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      margin-right: 10px;
      font-size: var(--fz-sm);
      counter-increment: section;
      content: "0" counter(section) ".";
    }

    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(var(--fz-heading), 5vw, 100px);
  }

  p {
    font-size: var(--fz-md);
    color: var(--light-grey);
  }

  .email-link {
    margin-top: 30px;
    ${({ theme }) => theme.mixins.bigButton}
    ${({ theme }) => theme.mixins.boxShadow}
    @media (max-width:768px) {
      ${({ theme }) => theme.mixins.button}
      margin-top: 15px;
    }
  }
`

const Contact = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="overline">Contact</h2>
      <h2 className="title">Say Hello!</h2>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a className="email-link" href={`mailto:${email}`}>
        Message me
      </a>
    </StyledContactSection>
  )
}

export default Contact
