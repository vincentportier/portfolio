import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { DarkModeProvider } from "../context/index"
const StyledContent = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  align-items: center;

  .error-content {
    grid-column: 8/12;
    text-align: center;
    @media (max-width: 768px) {
      grid-column: 1/-1;
    }
    h1 {
      color: var(--red);
      font-family: monospace;
      font-size: clamp(40px, 10vw, 80px);
      line-height: 1;
    }
    h2 {
      font-size: clamp(20px, 5vw, 30px);
      font-weight: 400;
    }
  }
  .error-image {
    grid-column: 1/8;

    img {
      display: block;
      max-width: 400px;
      margin: 0 auto 0 auto;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.button};
  &:hover {
    color: var(--white);
  }
  margin-top: 50px;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.smallButton}
  }
`
const PageNotFound = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <DarkModeProvider>
      <Layout>
        <Helmet title="Page Not Found" />
        {isMounted && (
          <StyledContent className="fillHeight">
            <div className="error-image">
              <img src="/404.png" alt="404 illustration" />
            </div>
            <div className="error-content">
              <h1>404</h1>
              <h2>page not found</h2>
              <StyledHomeButton to="/">Go home</StyledHomeButton>
            </div>
          </StyledContent>
        )}
      </Layout>
    </DarkModeProvider>
  )
}

export default PageNotFound
