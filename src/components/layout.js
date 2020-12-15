import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import Nav from "./nav"
import theme from "../styles/theme"
import darktheme from "../styles/darktheme"
import GlobalStyle from "../styles/GlobalStyle"
import Social from "./social"
import Email from "./email"
import Footer from "./footer"
import Head from "./head"
import { useDarkModeValue } from "../context"

export const Layout = ({ children }) => {
  const { darkMode } = useDarkModeValue()
  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={darkMode ? darktheme : theme}>
          <GlobalStyle darkMode={darkMode} />
          <Nav />
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
