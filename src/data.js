import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";

export const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "scroll-to-home",
    offSet: -53,
  },
  {
    id: 2,
    name: "Tech Stack",
    path: "scroll-to-techstack",
    offSet: -53,
  },
  {
    id: 3,
    name: "Projects",
    path: "scroll-to-projects",
    offSet: -155,
  },
  // {
  //   id: 4,
  //   name: "Recommendations",
  //   path: "scroll-to-recommendations",
  //   offSet: 0,
  // },
  {
    id: 5,
    name: "Contact",
    path: "scroll-to-contact",
    offSet: -53,
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Portfolio",
    description:
      "Responsive portfolio design with ReactJS. Used react hooks, props, react-router, react-icons, react-scroll and CSS.",
    sourceCodeUrl: "https://github.com/mtajammulzia/portfolio",
  },
  {
    id: 2,
    name: "Pacman",
    description:
      "Complete clone of Pacman game with implementaion of artificial intelligence for ghosts to chase down pacman.",
    sourceCodeUrl: "https://github.com/mtajammulzia/Pacman-Game",
  },
  {
    id: 3,
    name: "Navigation",
    description:
      "Responsive navbar and sidebar navigation with animations. Used react hooks, props, react-router, react-icons and CSS",
    sourceCodeUrl: "https://github.com/mtajammulzia/responsive-navbar-sidebar",
  },
  {
    id: 4,
    name: "A* Search Algorithm",
    description:
      "Visualization of A* search algorithm. Using p5 a JavaScript library for visual graphics",
    sourceCodeUrl: "https://github.com/mtajammulzia/A-Star-In-p5",
  },
  {
    id: 5,
    name: "Prize Bond Searcher",
    description:
      "A prize bond searcher. Used Java File.io to look for prize bond numbers present in one file and compare it with other. File can be fed with garbage data, as long as there are actual bond number in file it will work!",
    sourceCodeUrl: "https://github.com/mtajammulzia/prizebondsearcher",
  },
  {
    id: 6,
    name: "2D Flappy Bird",
    description:
      "I made a flappy bird game using Pygame library in Python. Learned to implement the game mechanics i.e. vertical movement of bird, jump of bird, movement of pipes etc",
    sourceCodeUrl: "https://github.com/mtajammulzia/portfolio",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    url: "https://www.youtube.com/c/Codamy",
    cName: "icon youtube-icon",
    logo: <FaIcons.FaYoutube />,
  },
  {
    id: 2,
    url: "https://github.com/mtajammulzia",
    cName: "icon github-icon",
    logo: <FaIcons.FaGithub />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/mtajammulzia/",
    cName: "icon linkedin-icon",
    logo: <FaIcons.FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.instagram.com/codamy2021/",
    cName: "icon instagram-icon",
    logo: <FaIcons.FaInstagram />,
  },
];

export const techStack = [
  {
    id: 1,
    stackName: "Languages",
    logo: <FaIcons.FaCode />,
    cName: "stack",
    technologies: [
      {
        id: 2,
        name: "JavaScript",
        cName: "technology",
        logo: <SiIcons.SiJavascript />,
      },
      {
        id: 1,
        name: "Java",
        cName: "technology",
        logo: <SiIcons.SiJava />,
      },
      {
        id: 3,
        name: "Solidity",
        cName: "technology",
        logo: <SiIcons.SiSolidity />,
      },
    ],
  },
  {
    id: 2,
    stackName: "Frameworks",
    logo: <AiIcons.AiFillCodeSandboxCircle />,
    cName: "stack",
    technologies: [
      {
        id: 1,
        name: "ReactJS",
        cName: "technology",
        logo: <SiIcons.SiReact />,
      },
      {
        id: 2,
        name: "NodeJS",
        cName: "technology",
        logo: <FaIcons.FaNodeJs />,
      },
      {
        id: 3,
        name: "TypeScript",
        cName: "technology",
        logo: <SiIcons.SiTypescript />,
      },
      {
        id: 4,
        name: "GraphQL",
        cName: "technology",
        logo: <SiIcons.SiGraphql />,
      },
      // {
      //   id: 2,
      //   name: "Bootstrap",
      //   cName: "technology",
      //   logo: <SiIcons.SiBootstrap />,
      // },
      // {
      //   id: 4,
      //   name: "SpringBoot",
      //   cName: "technology",
      //   logo: <SiIcons.SiSpring />,
      // },
    ],
  },
  {
    id: 3,
    stackName: "Databases",
    logo: <FaIcons.FaDatabase />,
    cName: "stack",
    technologies: [
      {
        id: 1,
        name: "MongoDB",
        cName: "technology",
        logo: <SiIcons.SiMongodb />,
      },
      {
        id: 2,
        name: "SQL",
        cName: "technology",
        logo: <AiIcons.AiOutlineConsoleSql />,
      },
    ],
  },
  {
    id: 4,
    stackName: "Tools",
    logo: <FaIcons.FaToolbox />,
    cName: "stack",
    technologies: [
      {
        id: 1,
        name: "Git",
        cName: "technology",
        logo: <DiIcons.DiGitBranch />,
      },
      {
        id: 2,
        name: "GitHub",
        cName: "technology",
        logo: <FaIcons.FaGithub />,
      },
      {
        id: 2,
        name: "HardHat",
        cName: "technology",
        logo: <FaIcons.FaHardHat />,
      },
    ],
  },
];
