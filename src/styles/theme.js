import mixins from "./mixins"
import { css } from "styled-components"

const theme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
  colors: css`
    --black: #2b2b2b;
    --white: #ffffff;
    --red: #fe5b5b;
    --red-tint: #fce9e9;
    --grey: #4a4a4a;
    --light-grey: #767676;
  `,
}

export default theme
