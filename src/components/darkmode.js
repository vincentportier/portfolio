import React from "react"
import styled from "styled-components"
import Icon from "./icons/icon"
import { css } from "styled-components"
import { useDarkModeValue } from "../context/index"

const StyledSwitch = styled.div`
  margin-left: 20px;
  .theme-switch-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    width: 20px;
    height: 20px;
    margin: 5px;
  }

  ${props =>
    props.darkMode
      ? css`
          .moon {
            color: var(--red);
            transition: var(--transition);
          }
        `
      : css`
          .sun {
            color: var(--red);
            transition: var(--transition);
          }
        `}

  .theme-switch {
    display: inline-block;
    height: 20px;
    position: relative;
    width: 40px;
    top: 5px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 12px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 12px;
  }

  input:checked + .slider {
    background-color: var(--red);
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkModeValue()

  return (
    <StyledSwitch className="theme-switch-wrapper" darkMode={darkMode}>
      <Icon name="Sun" className="sun" />
      <label className="theme-switch">
        <input
          type="checkbox"
          id="darkmode-checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="slider round"></div>
      </label>
      <Icon name="Moon" className="moon" />
    </StyledSwitch>
  )
}

export default DarkMode
