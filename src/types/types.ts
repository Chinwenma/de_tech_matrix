import { IconType } from "react-icons";


export type SkillType= {
    id:number
    title: string;
    description: string;
    icon: IconType;
  };

  export type ProjectType = {
    id: number;
    title: string;
    description: string;
    image: string;
    liveLink: string;
    githubLink: string;
  };