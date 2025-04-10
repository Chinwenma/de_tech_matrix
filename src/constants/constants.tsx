import { FaLaptopCode, FaCameraRetro, FaPaintBrush,} from "react-icons/fa";
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
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "I craft intuitive and visually appealing interfaces that not only look great but also offer seamless navigation. From wireframes to final mockups, I focus on user behavior and design principles to create layouts that are both engaging and easy to use. My goal is to bridge the gap between design and development for a smooth user experience..",
    icon: FaPaintBrush,
  },
  {
    id:3,
    title: "Graphic Design",
    description:
      "I offer creative design solutions tailored to your brand, including logo design, social media graphics, flyers, posters, and more. Using tools like Canva and Adobe Express, I ensure each visual element communicates your message effectively while maintaining a consistent brand identity.",
    icon: FaCameraRetro,
  },
  {
    id:4,
    title: "Digital Marketing",
    description:
      "I help businesses and personal brands grow their online presence through content creation, targeted social media campaigns, and visual storytelling. From developing content strategies to running ads, I combine creativity with data-driven techniques to connect with the right audience and drive engagement.",
    icon: RiAdvertisementLine,
  },

];

export const projectData: ProjectType[] = [
  {
      id: 1,
      title: "Travel and Tours Website",
      description: "A wete built with Next.js and Tailwind CSS that lets users explore tour packages and book trips.",
      image: "/assets/matrix2.png",
      liveLink: "https://travelap.vercel.app",
      githubLink: "https://github.com/username/travel-app",
    },
    {
      id: 2,
      title: "Online Booktore",
      description: "An interactive bookstore application with cart, wishlist, and daily deals functionality.",
      image: "/assets/matrix2.png",
      liveLink: "https://bookore.vercel.app",
      githubLink: "https://github.com/username/bokstore",
    },
    {
      id: 3,
      title: "Online Bstore",
      description: "An iractive bookstore application with cart, wishlist, and daily deals functionality.",
      image: "/assets/matrix2.png",
      liveLink: "https://bstore.vercel.app",
      githubLink: "https://github.com/username/bkstore",
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

