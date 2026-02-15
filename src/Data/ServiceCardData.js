import { FaReact } from "react-icons/fa";
import { SiMongodb, SiNodedotjs, SiOpenai } from "react-icons/si";
import { BsFillCloudsFill } from "react-icons/bs";

export const cardsData = [
  {
    title: "MERN Stack Web Development",
    icon: FaReact,
    description:
      "We build high-performance full-stack applications using MongoDB, Express.js, React, and Node.js, delivering scalable and maintainable digital products.",
    items: [
      "Custom Web Applications",
      "REST & GraphQL APIs",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Backend & Database Architecture",
    icon: SiMongodb,
    description:
      "Robust backend systems and optimized database design to ensure scalability, security, and seamless data handling for modern applications.",
    items: [
      "MongoDB Schema Design",
      "Node.js & Express APIs",
      "Performance Optimization",
    ],
  },
  {
    title: "Cloud & DevOps Solutions",
    icon: BsFillCloudsFill,
    description:
      "Deployment and infrastructure management with modern DevOps practices to ensure reliability, CI/CD automation, and cloud scalability.",
    items: [
      "AWS / Azure Deployment",
      "CI/CD Pipelines",
      "Server & Environment Management",
    ],
  },
  {
    title: "AI Integration & Automation",
    icon: SiOpenai,
    description:
      "We integrate AI-powered solutions into web applications to automate workflows, enhance user experiences, and provide intelligent insights.",
    items: [
      "Chatbots & AI Assistants",
      "OpenAI / LLM Integration",
      "Predictive Analytics & Automation",
    ],
  },
];
