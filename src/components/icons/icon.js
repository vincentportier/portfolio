import React from "react"
import PropTypes from "prop-types"
import IconInstagram from "./instagram"
import IconLinkedIn from "./linkedin"
import IconGitHub from "./github"
import IconExternal from "./external"
import IconCodeWar from "./codewar"

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
    case "External":
      return <IconExternal />
      break
    case "CodeWar":
      return <IconCodeWar />
      break
    default:
      return <IconInstagram />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
