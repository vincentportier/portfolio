import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import Nav from "./nav"
import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"
import Social from "./social"
import Email from "./email"
import Footer from "./footer"
import Head from "./head"

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle darkMode={darkMode} />
          <Nav onToggleDarkMode={handleToggleDarkMode} />
          <Social />
          <Email />
          <div id="content">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout
