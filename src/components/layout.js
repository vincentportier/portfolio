import React from "react"
import { ThemeProvider } from "styled-components"
import Nav from "./nav"
import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"
import Social from "./social"
import Email from "./email"
import Footer from "./footer"

export const Layout = ({ children }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Social />
        <Email />
        <div id="content">
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
