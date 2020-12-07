import React from "react"
import PropTypes from "prop-types"
import IconInstagram from "./instagram"
import IconLinkedIn from "./linkedin"
import IconGitHub from "./github"

const Icon = ({ name }) => {
  switch (name) {
    case "Instagram":
      return <IconInstagram />
      break
    case "LinkedIn":
      return <IconLinkedIn />
      break
    case "Github":
      return <IconGitHub />
      break
    default:
      return <IconInstagram />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
