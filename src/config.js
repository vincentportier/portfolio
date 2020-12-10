module.exports = {
  email: "portier.vin@gmail.com",
  socialMedia: [
    { name: "Github", url: "https://github.com/vincentportier" },
    { name: "LinkedIn", url: "https://linkedin.com/in/portiervincent" },
    { name: "Instagram", url: "https://www.instagram.com/letsgosmwhr/" },
  ],
  navLinks: [
    { name: "About", url: "/#about" },
    {
      name: "Projects",
      url: "/#projects",
    },
    { name: "Contact", url: "/#contact" },
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS/Sass",
    "React",
    "React Router",
    "React Redux",
    "Moment.js",
    "Material-UI",
    "Git",
    "Firebase",
    "Netlify",
  ],
  projects: [
    {
      title: "vportier.com",
      description:
        "First iteration of my personal website built with React and hosted on Netlify.",
      technologies: ["React", "Gatsby", "Styled Components", "Hooks"],
      external: "https://vportier.com",
      github: "https://github.com/vincentportier/portfolio",
      image: "/og.png",
    },
    {
      title: "Toudo",
      description:
        "Toudo is a web app that helps you organize your life. You can create tasks, schedule, prioritise, sort, file and comment on them. Toudo manages authentication and saves your tasks in Firebase. Toudo uses custom hooks to make firebase calls and set the context of the app with your tasks and projects.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "Firebase",
        "React Router",
        "Hooks",
        "Context",
      ],
      external: "https://toudo.netlify.app",
      github: "https://github.com/vincentportier/toudo",
      image: "/toudo.png",
    },
    {
      title: "The Resistance: Avalon",
      description:
        "This web app is an adaptation of the game The Resistance: Avalon. I used object oriented programming to define the rules of the game and conditional rendering to update the DOM and progress the game based on the players decisions.",
      technologies: ["React", "HTML", "CSS", "React Router"],
      external: "https://avalon-game.netlify.app",
      github: "https://github.com/vincentportier/avalon-game",
      image: "/avalon.png",
    },
    {
      title: "FreeCodeCamp certification projects",
      description:
        "Each FreeCodeCamp certification requires to complete 5 projects to finalise the course. I have built 15 projects, including static webpages, a random quote generator, a pomodoro clock, a calculator, a markdown text editor and a drum-machine.",
      technologies: ["HTML", "CSS", "Javascript", "React", "Redux"],
      external: "https://calculator-js-fcc.netlify.app/",
      github: "https://github.com/vincentportier",
      image: "/fcc.png",
    },
  ],
}
