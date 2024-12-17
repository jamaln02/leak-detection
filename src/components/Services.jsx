"use client"
import React from 'react'
import ServicesImages from './ServicesImages'

const Services = () => {
  return (
    <div className="md:my-20 my-6 p-6 md:p-20  md:h-[88.7vh]" id="services">
    <div className="bg-div lg:container  bg-rectangle-bg bg-[#f7f7fc] md:h-[350px]  rounded-3xl bg-cover bg-center md:flex gap-20 items-center ">
      <div className="p-2 md:p-5 flex flex-col justify-around my-2 md:my-5">
        <h3 className="bg-white px-2 md:px-5  text-second font-bold rounded-xl w-fit">
          خدماتنا
        </h3>
        <p className="xl:text-[40px] font-medium lg:text-3xl md:text-xl text-base text-right my-4 md:my-10 w-3/4">
          إختر <span className="text-second font-bold">الخدمة</span> اللتي تناسب طلبك و دع الامر لخبرائنا
        </p>
        <p className="lg:text-base md:text-sm text-xs text-right text-[#ADB3DA] tracking-wide">
          إختر الخدمة و اخبرنا عن مشكلتك و سوف نرسل لك الفني المناسب في اسرع
          وقت
        </p>
      </div>
        <ServicesImages/>
    </div>
  </div>
  )
}

export default Services