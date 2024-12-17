"use client";
import Image from "next/image";
import tick from "@/../public/tick-circle.svg"
import { useSelector } from "react-redux";
const OurServices2 = () => {
  const { data } = useSelector((state) => state.allData.data);
  const home_services = data?.home_services
  return (
    <div className="my-14 md:p-6 p-2">
      <div className=" md:px-10 px-6 lg:flex lg:flex-row flex-col lg:justify-between lg:items-center ">
        {home_services?.map((ele) => (
          <div
            key={ele?.id}
            className="lg:w-[400px] flex justify-center relative lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] w-[80%] h-[200px] m-auto"
          >
            <div className="absolute top-4 left-5 w-[90%] h-[90%] bg-[#3162DA0A] rotate-[-15deg] rounded-3xl"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
              <Image className="w-full object-contain rounded-lg" src={ele?.image} width={440} height={400} alt="workers img" />
            </div>
          </div>
        ))}

        <div className="lg:w-1/2 lg:mt-0 mt-10 w-full">
          <div className="">
            <h3 className="bg-[#3162DA0A] px-6 py-1 text-second rounded-[50px] w-fit font-medium">
              خدمة تسريب المياه
            </h3>
            <h4 className="xl:text-[40px] lg:text-3xl md:text-xl text-right font-medium my-4 lg:my-8 md:w-[400px]">
              إصلاح وتسريب المياه
            </h4>
            <p className="lg:text-base md:text-sm text-xs text-right text-[#ADB3DA] w-4/5">
              نحن فريق من الخبراء نهتم بتلبية احتياجاتكم في مجال الصيانة . سواء
              كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي، أو
              تركيب أجهزة الحمام والمطبخ، فإننا هنا لنساعدكم. نحن نقدم خدماتنا
              للعملاء في جميع أنحاء المدينة ونضمن لكم جودة العمل والموثوقية في
              كل مشروع نقوم به.
            </p>
          </div>
          <ul className="mt-5">
            <li className="md:text-base  text-xs my-1 flex items-center gap-2">
              <Image src={tick} width={24} height={24} alt="tick" />
              مدة الضمان قد تختلف حسب نوع الخدمة التي تم تقديمها </li>
            <li className="md:text-base text-xs my-1 flex items-center gap-2">
              <Image src={tick} width={24} height={24} alt="tick" />
              ضمانًا على المواد التي نستخدمها في الأعمال التي نقوم بها</li>
            <li className="md:text-base text-xs my-1 flex items-center gap-2">
              <Image src={tick} width={24} height={24} alt="tick" />
              تقديم خدمات عالية الجودة ونضمن رضاالعملاء </li>
          </ul>
          <button className="bg-second rounded-[90px] text-white font-medium py-3 px-10 mt-4">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurServices2
