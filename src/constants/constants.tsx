import { FaLaptopCode, FaCameraRetro,} from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
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
      "I specialize in building modern, responsive, and high-performing websites. Whether it's a landing page, a business website, or a web application, I focus on clean code, scalability, and functionality to ensure an excellent user experience across all devices.",
    icon: FaLaptopCode,
  },
  // {
  //   id: 2,
  //   title: "UI/UX Design",
  //   description:
  //     "I craft intuitive and visually appealing interfaces that not only look great but also offer seamless navigation. From wireframes to final mockups, I focus on user behavior and design principles to create layouts that are both engaging and easy to use. My goal is to bridge the gap between design and development for a smooth user experience..",
  //   icon: FaPaintBrush,
  // },
  {
    id:2,
    title: "Database Design & Integration",
    description:
      "I build and integrate scalable databases, ensuring efficient data storage, security, and retrieval. My goal is to create data-driven web applications that handle complex functionalities while maintaining performance and reliability",
    icon: FaCameraRetro,
  },
  {
    id:3,
    title: "API Integration & Optimization",
    description:
      "I integrate third-party APIs and services to extend the functionality of web applications—such as payment gateways, authentication systems, and external data sources. I also focus on optimizing API performance to ensure seamless and secure communication between frontend and backend systems.",
    icon: RiAdvertisementLine,
  },

];

export const projectData: ProjectType[] = [
  {
      id: 1,
      title: "Real Estate Website",
      description: "A responsive real estate web app for browsing, listing, and managing properties, featuring user authentication, dashboard management, and role-based access for agents and admins.",
      image: "/assets/real.png",
      liveLink: "https://matrix-real-estate.vercel.app/",
      githubLink: "https://github.com/Chinwenma/MatrixRealEstate",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and secure checkout, including user authentication and role-based access for admins and customers.",
      image: "/assets/matrix-shop.png",
      liveLink: "https://matrix-shop-psi.vercel.app/",
      githubLink: "https://github.com/Chinwenma/matrix-shop",
    },
    {
      id: 3,
      title: "Diocesan Community Website",
      description: "Contributed to building a comprehensive website with a MongoDB database, implementing features such as event management, news updates,and resource sharing",
      image: "/assets/katsina.png",
      liveLink: "https://catholicdioceseofkatsina.org/",
      githubLink: "https://github.com/verbumnetworks/Kastina",
    },
    // {
    //   id: 4,
    //   title: "Onlinkstore",
    //   description: "tive bookstore application with cart, wishlist, and daily deals functionality.",
    //   image: "/assets/matrix2.png",
    //   liveLink: "https://bostore.vercel.app",
    //   githubLink: "https://github.com/username/boo",
    // },
    // Add more projects as needed
  ];

