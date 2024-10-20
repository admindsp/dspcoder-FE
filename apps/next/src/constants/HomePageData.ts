import NXPlogo from "@/assets/NXP.png";
import STlogo from "@/assets/ST.png";
import EXPlogo from "@/assets/EXP.png";
import TataImage from "@/assets/tata.png";
import QualCommImage from "@/assets/Qualcomm.png";
import CapgeminiImage from "@/assets/capgemini.png";
import HoneWellImage from "@/assets/honewell.png";
import { HomePageDataType } from "@/types/HomePage";
import bannerImage from "@/assets/board.png";
import AIBasedInterviewImg from "@/assets/AIBasedInterviewImg.png";

export const homePageData: HomePageDataType = {
  primary: {
    title: "Embedded Systems Redefined",
    description:
      "Learn and practice advanced embedded system concepts with industry-leading boards and platforms.",
    media: [
      {
        path: bannerImage.src,
        type: "image",
        alt_text: "Main banner showing embedded systems",
      },
    ],
  },
  secondary: [
    {
      title: "Prepare for Coding Interview",
      description:
        "On DSPCoder you can prepare for your embedded coding interviews with tailored company specific preparation guide",
      media: null,
      content: [
        {
          title: "Data Structures & Algorithms",
          description:
            "Practice frequently asked questions tailored for constrained embedded system environments. ",
        },
        {
          title: "Major Embedded Concepts",
          description:
            "Master low-level programming, communication protocols, driver development, OS concepts and MCU architectures.  ",
        },
        {
          title: "Domain Specific Question Bank",
          description:
            "Learn software standards for aerospace, automobile, medical equipment and other domains. ",
        },
      ],
    },

    {
      title: "AI based interviewer",
      description:
        "Improve your knowledge with questions from datasheets, manuals, code snippets, and more.",
      media: [
        {
          path: AIBasedInterviewImg.src,
          type: "image",
          alt_text: "Prepare_For_Coding",
        },
      ],
      content: null,
    },
    {
      title: "Learn firmware on range of hardwares",
      description:
        "Learn how to develop firmware for a variety of simulated hardware platforms powered by Renode, sensors and actuators  ",
      media: null,
      content: [
        {
          title: "Data Structures & Algorithms",
          description:
            "Practice frequently asked questions tailored for constrained embedded system environments.",
        },
        {
          title: "Major Embedded Concepts",
          description:
            "Master low-level programming, communication protocols, driver development, OS concepts, and MCU architectures.",
        },
        {
          title: "Sensor Integration",
          description: "Learn how to integrate sensors into embedded systems.",
        },
        {
          title: "Communication Protocols",
          description:
            "Dive deep into communication protocols such as I2C, SPI, UART, and CAN.",
        },
      ],
    },
  ],
  footer_badges: [
    HoneWellImage.src,
    QualCommImage.src,
    CapgeminiImage.src,
    TataImage.src,
  ],
};
