import { FaLaptopCode, FaCameraRetro, FaPaintBrush,} from "react-icons/fa";

import { SkillType } from "../types/types";
import { ProjectType } from "../types/types";



export const navLinks = [
    {
      id: 1,
      url: "#",
      label: "Home",
    },
    {
      id: 2,
      url: "#about",
      label: "About",
    },
   
    {
      id: 3,
      url: "#skills",
      label: "Skills",
    },
    {
      id: 4,
      url: "#projects",
      label: "Projects",
    },
    {
      id: 5,
      url: "#contact",
      label: "Contact",
    },
 
  ];

export const skillsData: SkillType[] = [

  {
    id:1,
    title: "Web Development",
    description:
      "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.",
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
    icon: FaPaintBrush,
  },
  {
    id:3,
    title: "Graphic Design",
    description:
      "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.",
    icon: FaCameraRetro,
  },
  {
    id:4,
    title: "Digital Marketing",
    description:
      "more successful? Learn to love learning and growth. The more effort you put into improving your skills.",
    icon: FaLaptopCode,
  },

];

export const projectData: ProjectType[] = [
  {
      id: 1,
      title: "Travel and Tours Website",
      description: "A wete built with Next.js and Tailwind CSS that lets users explore tour packages and book trips.",
      image: "/assets/matrix1.png",
      liveLink: "https://travelap.vercel.app",
      githubLink: "https://github.com/username/travel-app",
    },
    {
      id: 2,
      title: "Online Booktore",
      description: "An interactive bookstore application with cart, wishlist, and daily deals functionality.",
      image: "/assets/matrix1.png",
      liveLink: "https://bookore.vercel.app",
      githubLink: "https://github.com/username/bokstore",
    },
    {
      id: 3,
      title: "Online Bstore",
      description: "An iractive bookstore application with cart, wishlist, and daily deals functionality.",
      image: "/assets/matrix1.png",
      liveLink: "https://bstore.vercel.app",
      githubLink: "https://github.com/username/bkstore",
    },
    {
      id: 4,
      title: "Onlinkstore",
      description: "tive bookstore application with cart, wishlist, and daily deals functionality.",
      image: "/assets/matrix1.png",
      liveLink: "https://bostore.vercel.app",
      githubLink: "https://github.com/username/boo",
    },
    // Add more projects as needed
  ];

