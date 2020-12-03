import React from "react"
import { ThemeProvider } from "styled-components"
import Nav from "./nav"
import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"

export const Layout = ({ children }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <div id="content">{children}</div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
