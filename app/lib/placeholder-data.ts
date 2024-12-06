import iconApple from "../../public/images/apple.svg";
import iconGoogle from "../../public/images/google.svg";
import iconYoutube from "../../public/images/youtube.svg";
import iconExpress from "../../public/images/icon-express.svg";
import iconGit from "../../public/images/icon-git.svg";
import iconNest from "../../public/images/icon-nest.svg";
import iconJavascript from "../../public/images/icon-javscript.svg";
import iconTypescript from "../../public/images/icon-typescript.svg";
import iconTailwindcss from "../../public/images/icon-tailwindcss.svg";
import iconReact from "../../public/images/icon-react.svg";
import iconPostgres from "../../public/images/icon-postgresql.svg";
import iconNodejs from "../../public/images/icon-nodejs.svg";
import iconNextjs from "../../public/images/icon-nextjs.svg";
import iconSass from "../../public/images/icon-sass.svg";
import frame1 from "../../public/images/Frame 18 (2).svg";
import frame2 from "../../public/images/Frame 18.svg";
import crypto from "../../public/images/crypto.svg";
import ecommerce from "../../public/images/ecommerce.svg";
import blog from "../../public/images/blog.svg";

export const experienceList = [
  {
    id: 1,
    icon: iconGoogle,
    company: "Lead Software Engineer at Google",
    text: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    date: "Nov 2019 - Present",
  },
  {
    id: 2,
    icon: iconYoutube,
    company: "Software Engineer at Youtube",
    text: "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    date: "Jan 2017 - Oct 2019",
  },
  {
    id: 3,
    icon: iconApple,
    company: "Software Engineer at Apple",
    text: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    date: "Jan 2016 - Dec 2017",
  },
];

export const skillsList = [
  { id: 1, label: "javascript", icon: iconJavascript },
  { id: 2, label: "react", icon: iconReact },
  { id: 3, label: "nextjs", icon: iconNextjs },
  { id: 4, label: "typescript", icon: iconTypescript },
  { id: 5, label: "nodejs", icon: iconNodejs },
  { id: 6, label: "expressJs", icon: iconExpress },
  { id: 7, label: "nestjs", icon: iconNest },
  { id: 8, label: "postgresql", icon: iconPostgres },
  { id: 9, label: "tailwindcss", icon: iconTailwindcss },
  { id: 10, label: "sass", icon: iconSass },
  { id: 11, label: "git", icon: iconGit },
  { id: 12, label: "react native", icon: iconReact },
];

export const testimonialList = [
  {
    id: 1,
    image: frame1,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "michael onafusi",
    occupation: "software engineer",
  },
  {
    id: 2,
    image: frame2,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "adebisi mayowa",
    occupation: "software engineer",
  },
  {
    id: 3,
    image: frame1,
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Flora sheen",
    occupation: "software engineer",
  },
];

export const projectsList = [
  {
    id: 1,
    pname: "crypto screener application",
    image: crypto,
    pdetail: `I'm Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book`,
  },
  {
    id: 2,
    pname: "euphoria - ecommerce (apparels) website template",
    image: ecommerce,
    pdetail: `I'm Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book`,
  },
  {
    id: 3,
    pname: "blog website template",
    image: blog,
    pdetail: `I'm Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book`,
  },
];

export const navLinks = [
  { id: 1, label: "about me" },
  { id: 2, label: "skills" },
  { id: 3, label: "projects" },
  { id: 4, label: "contact me" },
];
