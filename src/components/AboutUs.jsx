"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const ourServices = [
    {
      title: "فريق مؤهل",
      desc: "فريق متدرب و مؤهل",
      image: "https://example.jpg"

    },
    {
      title: "خدمة سريعة",
      desc: "نحرص علي توفير الوصول السريع لخدمتك",
      image: "https://example.jpg"
    },
    {
      title: "عروض حصرية",
      desc: "عروض متوفرة دائما و نحرص علي اقل التكاليف",
      image: "https://example.jpg"
    },
    {
      title: "تقييمات عالية",
      desc: "تتميز خدماتنا و خبرائنا بأفضل تقييمات رضا العملاء",
      image: "https://example.jpg"
    },
  ];


  const { data } = useSelector((state) => state.allData.data);
  const [combinedServices, setCombinedServices] = useState(ourServices);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const advantages = data?.advantages;
  const home_about = data?.home_about;

  useEffect(() => {
    if (advantages && home_about) {
      const updatedServices = ourServices.map((service, index) => ({
        ...service,
        title: advantages[index]?.title || service.title,
        desc: advantages[index]?.description || service.desc,
        image: advantages[index]?.image || service.image
      }));
      setCombinedServices(updatedServices);
    }
  }, [advantages, home_about]);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);


  return (
    <div className="mx-auto p-5 md:p-10 h-full" id="about">
      <div className="lg:flex items-center px-4 md:px-10">
        <div className="lg:w-2/3 w-full">
          <h3 className="bg-[#3162DA0A] text-sm md:text-base px-6 py-1 text-center font-bold rounded-full w-fit text-second">
            من نحن
          </h3>
          <p className="font-medium text-xl md:text-3xl lg:text-4xl my-4 md:my-6 text-black">
            {home_about?.title || "أفضل الفنيين الخبراء لخدمتك"}
          </p>

          <div className="flex flex-wrap gap-4 md:gap-5">
            {combinedServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 my-2 w-full sm:w-[48%]"
              >
                <img
                  src={service?.image}
                  alt={service.title}
                  className="w-10 h-10 md:w-16 md:h-16 object-contain"
                />
                <div>
                  <p className="text-sm md:text-lg font-semibold text-black">
                    {service.title}
                  </p>
                  <span className="text-[#ADB3DA] text-xs md:text-sm">
                    {service.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-second rounded-full text-white font-bold py-2 px-6 mt-4">
            اعرف المزيد
          </button>
        </div>

        <div className="relative mt-8 lg:mt-0 mx-auto lg:mx-0 w-44 h-44 md:w-60 md:h-60 lg:w-[350px] lg:h-[350px]">
          <div className="absolute top-1/2 translate-y-[-40%] w-full text-center z-10">
            <img
              className="w-full h-full object-cover rounded-full"
              src={home_about?.image}
              alt="videoPoster"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-second flex items-center justify-center cursor-pointer"
              onClick={openVideo}
            >
              <Image src={"/Vector.svg"} width={15} height={15} alt="play icon" />
            </div>
          </div>

          <div className="absolute top-[4%] left-[-8%] w-[90%] h-[90%] bg-[#F7F7FC] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-3%] w-[90%] h-[90%] border border-second rounded-full"></div>
        </div>
      </div>
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute top-[-10px] right-[-10px] text-white text-xl font-bold"
            >
              ×
            </button>
            <video
              controls
              className="w-full h-auto"
              src={home_about.video}
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;


