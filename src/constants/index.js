import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  spoilerAlert,
  chordinatorAI,
  biquadris,

  threejs,
  c,
  cpp,
  python,
  java,
  ruby,
  azoop,
  toward,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ruby on Rails Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "ruby",
    icon: ruby,
  },

  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "c",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Intern",
    company_name: "Toward",
    icon: toward,
    iconBg: "#383E56",
    date: "June 2022 - Aug 2022",
    points: [
      "Studied HTML and MySQL and developed a functional web login page, allowing secure storage of user credentials.",
      "Communicated and asked insightful questions to my mentor to expedite and enhance my learning process.",
      "Passed the technical assessments for full-time employee qualification within the initial internship month.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "AZOOP",
    icon: azoop,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      " Contributed to the development of key features on Japan’s leading trucking and commercial vehicle SaaS platform (manager.trck.jp), using Ruby on Rails for backend and React for frontend.",
     "  Enhanced data retrieval by implementing GraphQL for efficient querying, and performed schema and model updates to optimize database interactions, improving overall application performance and scalability.",
"      Developed comprehensive unit tests for APIs using RSpec, ensuring robust performance in mission-critical systems.",
"      Facilitated cross-functional collaborations with the Product and Design teams to seamlessly integrate PDM-supplied assets into the platform’s UI using CSS and React, and contributed to technical documentation for new features.",
    ],
  },

  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spoiler Alert",
    description:
      "A web application designed to effectively combat food waste.",
    tags: [
      {
        name: "react",
        color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: spoilerAlert,
    source_code_link: "https://devpost.com/software/spoileralert-75qlvx",
  },
  {
    name: "Chordinator.AI",
    description:
      "A web application utilizing PyTorch and Tensorflow to generate chord progressions dynamically based on user inputs..",
      tags: [
      {
        name: "react",
        color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: chordinatorAI,
    source_code_link: "https://devpost.com/software/chordinator-501k9s",
  },
  {
    name: "Biquadris",
    description:
      " Biquadris is a modernized version of the classic Tetris game expanded for two player competition. ",
      tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "design pattern",
        color: "orange-text-gradient",
      },
    ],
    image: biquadris,
    source_code_link: "https://github.com/PACK-Hacks/biquadris?tab=readme-ov-file",
  },

  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };