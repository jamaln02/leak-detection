import React from 'react'
import avatar from "@/../public/Ellipse 49.png"
import Image from 'next/image'
import star from "@/../public/Filled.svg"
import arrow_right from "@/../public/arrow-right.svg"
import arrow_down from "@/../public/arrow-down.svg"
import BigImage from './BigImage'
import HomeVideo from './HeroVideo'

const Hero = () => {
  return (
    <div className="bg-main relative md:px-0 px-8 " id="home">
      <div className="md:relative h-[80%] md:h-[88vh] py-4 ">
        <div className="md:absolute  top-[3%] md:right-[6%] lg:right-[12%] md:max-w-[200px] lg:max-w-[350px] my-4 text-white">
          <h1 className="font-bold text:base md:text-xl lg:text-[32px] h-[80%] leading-6 md:leading-8 lg:!leading-[3rem] tracking-wider">مرحبًا بكم في موقعنا الخاص بخدمات كشف العوازل وتسريب المياه</h1>
        </div>
        <div className="bg-[#0A4088] rounded-[50px]  w-fit md:max-w-[200px] lg:max-w-[350px] p-2 md:p-5 lg:p-6 relative md:absolute md:top-[5%] md:left-[6%] lg:left-[10%]">
          <p className=" text-white text-center text-xs md:text-base tracking-wider">
            نهتم بتلبية احتياجاتكم. سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي.
          </p>
        </div>
        <div className="relative  md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2">

          <div className='flex justify-between items-center gap-4 md:flex-none'>
            <BigImage />


            <div className=" bg-vector-bg  bg-cover bg-center my-2 md:my-10 relative md:absolute md:-left-1/2 md:translate-x-[20%] md:top-1/2 w-[150px] md:w-[56%] max-w-[370px]  md:h-[30%]  rounded-[29px] p-2 md:p-4 md:translate-y-[-50%] z-10">
              <div className="flex items-center">
                <div className="w-[25%] h-[25%] md:w-[52px] md:h-[53px] rounded-full">
                  <Image className="rounded-full" src={avatar} alt="person" />
                </div>
                <div className="p-2 text-right">
                  <h1 className="font-medium text-white text-sm md:text-base">احمد محمد</h1>

                  <p className="text-[#ADB3DA] text-[10px] md:text-xs tracking-wider">
                    فني كشف تسريبات
                  </p>
                </div>
              </div>
              <div className="bg-[#F5BE0B0F] w-fit px-0.5 md:px-2 rounded-2xl my-1 md:my-3 flex gap-1 items-center justify-between">
                <Image src={star} width={24} height={24} alt='star' />
                <span className="text-[#F5BE0B] text-sm font-medium">
                  4.5
                </span>
                <div className='absolute left-1 bottom-0 rounded-full  flex justify-center items-center  bg-[#0A4088]'>
                  <Image src={arrow_right} width={50} height={55} alt='arrow' className='w-[25px] md:w-[50px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' relative my-2 md:my-6 lg:my-10 md:w-120 md:h-120 lg:w-[200px] lg:h-[200px] mx-auto md:absolute md:bottom-1 md:right-3 lg:absolute lg:bottom-[1%] lg:right-[10%] '>
          <HomeVideo />
        </div>

        <div className="md:w-[79px] md:h-[79px] w-[40px] h-[40px] left-[5%] bottom-[5%] rounded-full bg-second absolute md:left-[10%] md:bottom-[10%] flex justify-center items-center">
          <Image src={arrow_down} width={50} height={50} alt='' className='w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[50px]' />
        </div>
      </div>
    </div>
  );
}

export default Hero