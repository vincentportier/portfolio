import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { email } from "../../config"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { loaderDelay, navDelay } from "../../utils/index"

const StyledHero = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--red);
    font-family: monospace;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-lg));
    font-weight: 600;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--light-grey);
    line-height: 1;
  }

  p {
    margin: 20px 0 0;
    max-width: 600px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;

    @media (max-width: 480px) {
      ${({ theme }) => theme.mixins.smallButton}
    }

    @media (max-width: 768px) {
      ${({ theme }) => theme.mixins.button}
    }
  }
`

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay)
    return () => clearTimeout(timeout)
  }, [])

  const one = <h1>Hey there 👋</h1>
  const two = <h2 className="big-heading">I'm Vincent.</h2>
  const three = <h3 className="big-heading">I love creating things 🚀</h3>
  const four = (
    <p>
      I'm a French web developer currently living in Australia and seeking a
      full-time opportunity back in France !
    </p>
  )
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  )

  const items = [one, two, three, four, five]
  return (
    <StyledHero>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => {
            return (
              <CSSTransition key={i} classNames="fade" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            )
          })}
      </TransitionGroup>
    </StyledHero>
  )
}

export default Hero
