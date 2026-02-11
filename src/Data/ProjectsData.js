import { IoLogoPython } from "react-icons/io";
import { BsFilePdf } from "react-icons/bs";
import { FaFlask, FaPython } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import { DiJsBadge } from "react-icons/di";
import { AiOutlineChrome } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiMocha } from "react-icons/si";
const ProjectData = [
    {
        projectFirstHeading:
            "VS Code Extension For Generating Dot Env Files Quickly From Github Repo",
        projectSecondHeading: "Dot Env Generator",
        projectDescription:
            "You can quickly generate .env files for your projects directly from GitHub repositories using this VS Code extension. It streamlines the setup process by fetching environment variables from the specified repo.It free and Off line We never use any Data.It's secure too.",
        projectImage: [
            "https://i.pinimg.com/originals/1c/16/46/1c16465097de22892fde8fd91c793bb5.jpg",
            "https://ik.imagekit.io/hassaan/Dot_Env_Gen_By_Hassaan_Haider_Iyp69txQd",
            "https://i.pinimg.com/originals/1f/82/a7/1f82a757eee4c771c5503831ece9b949.jpg"
        ],
        projectLink: "https://marketplace.visualstudio.com/manage/publishers/dotenvgen",
        projectTechStack: [{ icon: SiMocha, Name: "Mocha" }, { icon: FaNode, Name: "Node Js" }, { icon: TbBrandVscode, Name: "VS Code" }]
    },

    {
        projectFirstHeading:
            "Browser Extension For Copying React Icons SVGs Code for easily customaization and use in projects",
        projectSecondHeading: "React Icons Copier Chrome Extension",
        projectDescription:
            "A Chrome extension that allows users to copy SVG code of React Icons directly from https://react-icons.github.io/ website  for easy customization and use in your projects. It provides a convenient way to access and utilize React Icons without needing to visit the official library or search for icons manually.",
        projectImage: [
            "https://i.pinimg.com/originals/bf/67/bd/bf67bdc3b01e83e9261ac344efea2fc4.jpg",
            "https://i.pinimg.com/originals/a4/ce/60/a4ce6029b65f0b269516d9f9e2ec3365.jpg",
            "https://i.pinimg.com/originals/e2/32/57/e23257ff65c144de64e3284a1441e517.jpg"
        ],
        projectLink: "https://github.com/hassaanhaider88/Extensions",
        projectTechStack: [
            {
                icon: AiOutlineChrome,
                Name: "Google Chrome"
            },
            {
                icon: DiJsBadge,
                Name: "JavaScript"
            }
        ]
    },

    {
        projectFirstHeading:
            "Easily Copy HD images URLs form Pinterest website easily with our extension.",
        projectSecondHeading: "Pinterest Image URLs Copier",
        projectDescription:
            "A browser extension that allows users to easily copy high-definition image URLs from the Pinterest website. With this extension, users can quickly access and share the direct links to their favorite Pinterest images without the need for manual searching or downloading, streamlining the process of sharing visual content from Pinterest.",
        projectImage: [
            "https://image.thum.io/get/width/800/https://zillow.com/",
            "https://image.thum.io/get/width/800/https://realtor.com/",
            "https://image.thum.io/get/width/800/https://airbnb.com/"
        ],
        projectLink: "https://github.com/hassaanhaider88/Extensions",
        projectTechStack: [
            {
                icon: AiOutlineChrome,
                Name: "Google Chrome"
            },
            {
                icon: DiJsBadge,
                Name: "JavaScript"
            },
            {
                icon: GrPinterest,
                Name: "Pinterest"
            }
        ]
    },

    {
        projectFirstHeading:
            "Can Easily Convert Any PDF File To Dark Mode With Our Web App For Better Reading Experience In Dark Environments",
        projectSecondHeading: "PDF Dark Mode Converter Web App",
        projectDescription:
            "A web application that allows users to easily convert any PDF file into dark mode for a better reading experience in dark environments. This tool provides a convenient way to enhance readability and reduce eye strain when viewing PDF documents in low-light conditions, making it ideal for nighttime reading or working in dimly lit spaces.",
        projectImage: [
            "https://image.thum.io/get/width/800/https://twitter.com/",
            "https://image.thum.io/get/width/800/https://discord.com/",
            "https://image.thum.io/get/width/800/https://facebook.com/"
        ],
        projectLink: "https://pdf-darker.onrender.com/",
        projectTechStack: [
            {
                icon: FaPython,
                Name: "Python"
            },
            {
                icon: FaFlask,
                Name: "Flask"
            },
            {
                icon: BsFilePdf,
                Name: "PymuPDF"
            },
            {
                icon: IoLogoPython,
                Name: "Pillow"
            }
        ]
    },

];

export default ProjectData;
