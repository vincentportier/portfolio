import React, { createContext, useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("DARK_MODE")

  const [darkMode, setDarkMode] = useState(
    storedDarkMode === null ? false : storedDarkMode === "true" ? true : false
  )

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode)
  }, [darkMode])

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
