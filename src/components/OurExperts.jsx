"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OurExperts = () => {
  const ourExperts = [
    {
      name: "ندي علي",
      job: "خبير تسريب المياه",
      image: "https://example.jpg"
    },
    {
      name: "احمد جلال",
      job: "خبير تسريب المياه",
      image: "https://example.jpg"
    },
    {
      name: "نادر كمال",
      job: "خبير تسريب المياه",
      image: "https://example.jpg"
    }
  ]

  const { data } = useSelector((state) => state.allData.data);
  const [combinedExperts, setCombinedExperts] = useState(ourExperts);

  const home_experts = data?.home_experts;

  useEffect(() => {
    if (home_experts) {
      const updatedExperts = ourExperts.map((expert, index) => ({
        ...expert,
        title: home_experts[index]?.title || expert.title,
        desc: home_experts[index]?.description || expert.desc,
        image: home_experts[index]?.image || expert.image
      }));
      setCombinedExperts(updatedExperts);
    }
  }, [home_experts]);

  return (
    <div className="md:mb-14 mb-8 md:p-10 p-4">
      <div className=" md:px-10 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="bg-[#3162DA0A] px-6 py-1 text-second font-medium rounded-[50px] w-fit">
              خبرائنا
            </h3>
            <h4 className="xl:text-[40px] lg:text-3xl md:text-xl text-right font-medium my-4 lg:my-3 md:w-[400px]"
            >افضل خبراء لدينا
            </h4>
          </div>
          <div><button className="bg-second rounded-[90px] text-white font-medium py-1 md:py-3 md:px-10 px-4 mt-4">تواصل معنا</button></div>
        </div>
        <div className="md:flex justify-between items-center md:flex-wrap lg:flex-nowrap my-3 px-4">
          {combinedExperts?.map((ele, index) => (
            <div key={index} className="text-center flex justify-center items-center gap-3 flex-col my-4 ">
              <Image src={ele.image} width={330} height={370} alt="expert" className="w-[60%]  md:w-full  bg-[#8080800F]" />
              <h4 className="md:text-2xl font-bold">{ele.name}</h4>
              <span className="text-[#BDBDD3]">{ele.job}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurExperts