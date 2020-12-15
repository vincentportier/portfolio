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

    case "LinkedIn":
      return <IconLinkedIn />

    case "Github":
      return <IconGitHub />

    case "External":
      return <IconExternal />

    case "CodeWar":
      return <IconCodeWar />

    case "Sun":
      return <IconSun className={className} />

    case "Moon":
      return <IconMoon className={className} />

    default:
      break
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
