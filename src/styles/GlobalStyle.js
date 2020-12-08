import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
//CSS reset
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing:border-box;
	font-family:'Work Sans', sans-serif;

	font-size:var(--fz-lg)
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//variables
:root {
	--black: #2B2B2B;
	--white: #FFFFFF;
	--red: #FE5B5B; 
	--red-tint:#FCE9E9;
  --grey: #4A4A4A;
  --light-grey: #767676;
	--fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading:32px;
	--border-radius: 4px;
	--transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	--nav-height:100px;
	--nav-height-scroll:70px;
  
--hamburger-width: 30px;

--ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
--ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
--ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
--ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}

#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
}

main {
margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 150px;

  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 25px;
  }
}


a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor:pointer;
    &:hover,
    &:focus {
      color: var(--red);

	}
}

svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

`

export default GlobalStyle
