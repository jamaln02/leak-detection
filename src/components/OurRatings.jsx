"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
const OurRatings = () => {
  const ourCustomers = [
    {
      name: "احمد عامر",
      job: "مؤسس شركة CAS",
      message: "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.",
      image: "https://example.jpg"
    },
    {
      name: "نرمين علي",
      job: "مؤسس شركة CAS",
      message: "لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.",
      image: "https://example.jpg"
    },
  ]


  const { data } = useSelector((state) => state.allData.data);
  const [combinedCustomers, setCombinedCustomers] = useState(ourCustomers);

  const testimonials = data?.testimonials;

  useEffect(() => {
    if (testimonials) {
      const updatedCustomers = ourCustomers.map((customers, index) => ({
        ...customers,
        title: testimonials[index]?.title || customers.name,
        desc: testimonials[index]?.description || customers.job,
        image: testimonials[index]?.image || customers.image
      }));
      setCombinedCustomers(updatedCustomers);
    }
  }, [testimonials]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ourCustomers.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  return (
    <div className="md:mb-10 mb-4 md:p-10 p-4">
      <div className="md:px-10 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="bg-[#3162DA0A] px-6 py-1 text-second font-medium rounded-[50px] w-fit">
              تقييماتنا
            </h3>
            <h4 className="xl:text-[40px] lg:text-3xl md:text-xl text-right font-medium my-4 lg:my-3 md:w-[400px]">
              اراء عملائنا
            </h4>
          </div>

          <div className="relative flex gap-6 justify-end flex-row-reverse">
            <button
              onClick={handlePrev}
              className={`${currentIndex === 0 ? "opacity-50" : ""
                } transform rotate-180`}
            >
              <Image src={"/arrowRightIcon.svg"} width={40} height={40} alt="prev" />
            </button>
            <button
              onClick={handleNext}
              className={`${currentIndex === ourCustomers.length - 1 ? "opacity-50" : ""
                }`}
            >
              <Image src={"/arrowRightIcon.svg"} width={40} height={40} alt="next" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:my-12 my-8 gap-8 ">
          {combinedCustomers.map((ele, ind) => (
            <div
              key={ind}
            >
              <div className="flex flex-col md:gap-6 gap-4 bg-[#3162DA08] rounded-[20px] md:p-10 p-4 w-[95%]">
                <Image src={"/quote-down.svg"} width={24} height={24} alt="quote-down" />
                <p className="md:text-base text-sm ">"{ele.message}"</p>
                <div className="flex items-center gap-4  mx-2">
                  <img src={ele.image} className="w-[52px]"></img>
                  <div>
                    <p className="font-medium">{ele.name}</p>
                    <span className="text-sm text-[#BDBDD3]">{ele.job} </span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
        <div dir="ltr" className="flex mt-4 gap-2 justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index % ourCustomers.length)}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-second w-6 md:w-8"
                : "bg-[#3162DA1A] w-3"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurRatings


