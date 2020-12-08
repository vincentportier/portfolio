import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
//CSS reset
html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--red);
    color: var(--white);
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

body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--grey);
    font-family: "Work Sans";
    font-size: var(--fz-xl);
    line-height: 1.3;
    font-weight:400;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
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
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 900;
    color: var(--black);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display:flex;
    align-items:center;
    position:relative;
    margin: 10px 0 40px;
    width:100%;
    font-size:clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
    &:before {
      position:relative;
      counter-increment:section;
      content:"0"counter(section)".";
   
    top:4px;
    font-family: monospace;
    margin-right:10px;
    color:var(--red);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
  
    }
    &:after{
      content:"";
      position:relative;
      display:block;
      top:5px;
      height:1px;
      width: 300px;
      background-color:var(--black);
      margin-left:20px;

@media (max-width:1080px) {
width:200px;
}
@media (max-width:768px) {
width:100%;
}
@media (max-width:480px) {
margin-left:10px;
}
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
