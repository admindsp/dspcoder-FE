import NXPlogo from '@/assets/NXP.png'
import STlogo from '@/assets/ST.png'
import EXPlogo from '@/assets/EXP.png'
import { StaticImageData } from 'next/image';
import TataImage from '@/assets/tata.png'
import QualCommImage from '@/assets/Qualcomm.png'
import CapgeminiImage from '@/assets/capgemini.png'
import HoneWellImage from '@/assets/honewell.png'


interface ImageItem {
    src?: StaticImageData;
    alt?: string;
    title:string;
}

interface Image{
    src: StaticImageData;
    alt: string;
}

const LogoArray: ImageItem[] = [
    {
        src: STlogo,
        alt: 'ST Logo',
        title:"ST boards"
    },
    {
        src: NXPlogo,
        alt: 'NXP Logo',
        title:"NXP boards"
    },
    {
        src: EXPlogo,
        alt: 'EXP Logo',
        title:"ESP SoCs"
    },
    {
        title:"Sensor Integration"
    },
    {
        title:"Communications"
    },
    {
        title:"Buttons & LEDs"
    }
];

interface card {
    title: string,
    info: string,
}

const cardData: card[] = [
    {
        title: "Data Structures & Algorithms",
        info: "Practice frequently asked questions tailored for constrained embedded system environments."
    },
    {
        title: "Major Embedded Concepts",
        info: "Master low-level programming, communication protocols, driver development, OS concepts and MCU architectures."
    },
]

const CompaniesImages : Image[] = [
    {
        src:HoneWellImage,
        alt:"HoneWellImage",
    },
    {
        src:QualCommImage,
        alt:"QualCommImage",
    },
    {
        src:CapgeminiImage,
        alt:"CapgeminiImage",
    },
    {
        src:TataImage,
        alt:"TataImage",
    },
]

export default { cardData , LogoArray , CompaniesImages};
