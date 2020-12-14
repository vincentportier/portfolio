import React from "react"
import PropTypes from "prop-types"
import IconInstagram from "./instagram"
import IconLinkedIn from "./linkedin"
import IconGitHub from "./github"
import IconExternal from "./external"
import IconCodeWar from "./codewar"
import IconSun from "./sun"
import IconMoon from "./moon"

const Icon = ({ name, className }) => {
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
    case "Sun":
      return <IconSun className={className} />
      break
    case "Moon":
      return <IconMoon className={className} />
      break
    default:
      break
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
