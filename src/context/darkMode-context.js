import React, { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkModeValue = () => useContext(DarkModeContext)

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
