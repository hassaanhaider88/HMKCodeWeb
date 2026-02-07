import { CgSmartHomeWashMachine } from "react-icons/cg"; 
import { MdSecurity } from "react-icons/md"; 
import { BsFillCloudsFill } from "react-icons/bs"; 
import { BsFillTerminalFill } from "react-icons/bs"; 
export const cardsData = [
  {
    title: "Custom Software Development",
    icon : BsFillTerminalFill,
    description:
      "We engineer scalable web and enterprise applications tailored to complex business workflows, ensuring performance, security, and long-term maintainability.",
    items: [
      "Web & SaaS Platforms",
      "API & System Integrations",
      "Database Architecture",
    ],
  },
  {
    title: "Cloud Computing Solutions",
    icon : BsFillCloudsFill ,
    description:
      "Design and deployment of secure, cost-optimized cloud infrastructure that improves availability, scalability, and operational efficiency.",
    items: [
      "AWS / Azure Deployment",
      "DevOps & CI/CD Pipelines",
      "Cloud Migration",
    ],
  },
  {
    title: "Cyber Security Services",
    icon  : MdSecurity,
    description:
      "Comprehensive security frameworks to protect applications, networks, and sensitive data against modern cyber threats and vulnerabilities.",
    items: [
      "Security Audits",
      "Penetration Testing",
      "Data Protection & Encryption",
    ],
  },
  {
    title: "AI & ML Integration",
    icon : CgSmartHomeWashMachine ,
    description:
      "Implementation of intelligent systems using real-world data to automate processes, enhance decision-making, and unlock predictive insights.",
    items: [
      "Predictive Analytics",
      "Computer Vision Systems",
      "Natural Language Processing",
    ],
  },
];
