import NXPlogo from "@/assets/NXP.png";
import STlogo from "@/assets/ST.png";
import EXPlogo from "@/assets/EXP.png";
import TataImage from "@/assets/tata.png";
import QualCommImage from "@/assets/Qualcomm.png";
import CapgeminiImage from "@/assets/capgemini.png";
import HoneWellImage from "@/assets/honewell.png";
import { HomePageDataType } from "@/types/HomePage";
import bannerImage from "@/assets/board.png";

export const homePageData: HomePageDataType = {
  primary: {
    title: "Embedded System Practice",
    description:
      "Learn and practice advanced embedded system concepts with industry-leading boards and platforms.",
    media: [
      {
        path: bannerImage,
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
          media: null,
        },
        {
          title: "Major Embedded Concepts",
          description:
            "Master low-level programming, communication protocols, driver development, OS concepts and MCU architectures.  ",
          media: null,
        },
        {
          title: "Domain Specific Question Bank",
          description:
            "Learn software standards for aerospace, automobile, medical equipment and other domains. ",
        },
      ],
    },

    {
      title: "Embedded Boards",
      description: "Explore popular embedded boards.",
      media: [
        {
          path: STlogo.src,
          type: "image",
          alt_text: "ST Logo",
        },
        {
          path: NXPlogo.src,
          type: "image",
          alt_text: "NXP Logo",
        },
        {
          path: EXPlogo.src,
          type: "image",
          alt_text: "EXP Logo",
        },
      ],
      content: null,
    },
    {
      title: "Core Concepts",
      description: "Strengthen your understanding of key concepts.",
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
