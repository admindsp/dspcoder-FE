import data from '@/constants/HomePageData';
import Image from 'next/image';

const CompaniesSection = () => {
  return (
    <div>
        <div className="flex justify-center mt-[20rem]">
            <h1 className="text-white text-4xl font-bold w-[40rem] text-center">Built by professionals from top companies.</h1>
        </div>
        <div className="ml-8 mr-8">
            <div className="flex align-middle justify-around gap-4 bg-[#181818] w-full h-[10rem] mt-10 rounded-[2rem]">
              {data.CompaniesImages.map((obj,index)=>(
                <Image src={obj.src} alt={obj.alt} className='object-none'/>
              ))}
            </div>
        </div>
    </div>
  )
}
export default CompaniesSection