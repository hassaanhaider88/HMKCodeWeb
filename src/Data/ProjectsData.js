import { DiJsBadge, DiReact } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFiletypeSvg } from "react-icons/bs";
import { IoLogoPython } from "react-icons/io";
import { BsFilePdf } from "react-icons/bs";
import { FaFlask, FaPython } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineChrome } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiMocha } from "react-icons/si";
import ExtensionDotEnvGen from "../assets/Extension_DotEnvGen.png";
import SVGCopire from '../assets/SVGCopire.png'
import SVGCodepierCover from "../assets/SVGCodeCopierCover.png"
import PinterestURICopire from "../assets/PinterestURICopire.png"
import PinterestExtCover from "../assets/PinterestExtCover.png"
import PinCopierImg from "../assets/PinCopierImg.png"
import PDFDarkerCover from "../assets/PDF-Darker-Cover.png"
import LiveUseGlobalState from "../assets/LiveUseGlobalState.png"
import CodeSnippet from '../assets/CodeSnippet.jpg'
const ProjectData = [
  {
    projectFirstHeading:
      "VS Code Extension For Generating Dot Env Files Quickly From Github Repo",
    projectSecondHeading: "Dot Env Generator",
    projectDescription:
      "You can quickly generate .env files for your projects directly from GitHub repositories using this VS Code extension. It streamlines the setup process by fetching environment variables from the specified repo.It free and Off line We never use any Data.It's secure too.",
    projectImage: [
      "https://ik.imagekit.io/hassaan/Dot_Env_Gen_By_Hassaan_Haider_Iyp69txQd",
      "https://dotenvgen.gallerycdn.vsassets.io/extensions/dotenvgen/dotenv-extractor/0.0.5/1771131153023/Microsoft.VisualStudio.Services.Icons.Default",
      ExtensionDotEnvGen
    ],
    projectLink:
      "https://marketplace.visualstudio.com/manage/publishers/dotenvgen",
    projectTechStack: [
      { icon: SiMocha, Name: "Mocha" },
      { icon: FaNode, Name: "Node Js" },
      { icon: TbBrandVscode, Name: "VS Code" },
    ],
  },

  {
    projectFirstHeading:
      "Browser Extension For Copying React Icons SVGs Code for easily customaization and use in projects",
    projectSecondHeading: "React Icons Copier Ext.",
    projectDescription:
      "A Chrome extension that allows users to copy SVG code of React Icons directly from https://react-icons.github.io/ website  for easy customization and use in your projects. It provides a convenient way to access and utilize React Icons without needing to visit the official library or search for icons manually.",
    projectImage: [
      SVGCopire,
      SVGCodepierCover,
    ],
    projectLink: "https://github.com/hassaanhaider88/Extensions",
    projectTechStack: [
      {
        icon: AiOutlineChrome,
        Name: "Google Chrome",
      },
      {
        icon: DiJsBadge,
        Name: "JavaScript",
      },
      { icon: BsFiletypeSvg, Name: "Pure SVG" },
    ],
  },

  {
    projectFirstHeading:
      "Easily Copy HD images URLs form Pinterest website easily with our extension.",
    projectSecondHeading: "Pinterest Image URLs Copier",
    projectDescription:
      "A browser extension that allows users to easily copy high-definition image URLs from the Pinterest website. With this extension, users can quickly access and share the direct links to their favorite Pinterest images without the need for manual searching or downloading, streamlining the process of sharing visual content from Pinterest.",
    projectImage: [
      PinterestURICopire,
      PinterestExtCover,
      PinCopierImg,
    ],
    projectLink: "https://github.com/hassaanhaider88/Extensions",
    projectTechStack: [
      {
        icon: AiOutlineChrome,
        Name: "Google Chrome",
      },
      {
        icon: DiJsBadge,
        Name: "JavaScript",
      },
      {
        icon: GrPinterest,
        Name: "Pinterest",
      },
    ],
  },

  {
    projectFirstHeading:
      "Convert  PDF File To Dark Mode With Our Web App For Better Reading Experience",
    projectSecondHeading: "PDF Dark Mode Converter",
    projectDescription:
      "A web application that allows users to easily convert any PDF file into dark mode for a better reading experience in dark environments. This tool provides a convenient way to enhance readability and reduce eye strain when viewing PDF documents in low-light conditions, making it ideal for nighttime reading or working in dimly lit spaces.",
    projectImage: [
      PDFDarkerCover,

    ],
    projectLink: "https://pdf-darker.onrender.com/",
    projectTechStack: [
      {
        icon: FaPython,
        Name: "Python",
      },
      {
        icon: FaFlask,
        Name: "Flask",
      },
      {
        icon: BsFilePdf,
        Name: "PymuPDF",
      },
      {
        icon: IoLogoPython,
        Name: "Pillow",
      },
    ],
  },

  {
    projectFirstHeading:
      "useGlobalState Custom React Hook For Managing Global State Across Your React Application",
    projectSecondHeading: "useGlobalState Hook",
    projectDescription:
      "A custom React hook that simplifies managing global state across your React application. It provides an easy way to share and update state values across multiple components without the need for complex state management libraries like Redux or Context API. With useGlobalState, you can create a centralized state that can be accessed and modified from any component, making it easier to maintain and synchronize state throughout your application.",
    projectImage: [
      "https://ik.imagekit.io/hassaan/useGlobalState_TpqFg4Gc0",
      LiveUseGlobalState
    ],
    projectLink: "https://www.npmjs.com/package/@hmk_codeweb88/useglobalstate",
    projectTechStack: [
      {
        icon: DiJsBadge,
        Name: "JavaScript",
      },
      {
        icon: DiReact,
        Name: "React",
      }

    ],
  },

  {
    projectFirstHeading:
      "CodeSnippet github Library For Sharing Your Code Snippets With The World",
    projectSecondHeading: "CodeSnippet Library",
    projectDescription:
      "A GitHub library that allows developers to share their code snippets with the world. This platform provides a convenient way for programmers to showcase their coding skills, share useful code snippets, and collaborate with other developers. Users can easily browse, search, and contribute to a wide range of code snippets across various programming languages and frameworks, fostering a collaborative coding community.",
    projectImage: [
      CodeSnippet,

    ],
    projectLink: "https://github.com/hassaanhaider88/CodingSnippets",
    projectTechStack: [
      {
        icon: FaPython,
        Name: "Python",
      },
      {
        icon: FaFlask,
        Name: "Flask",
      },
      {
        icon: AiOutlineHtml5,
        Name: "HTMl",
      },
      {
        icon: DiCss3Full,
        Name: "CSS",
      },
      {
        icon: DiJsBadge,
        Name: "JS",
      },
    ],
  },
];

export default ProjectData;
