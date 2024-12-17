"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BigImage from "./HeroComponent/BigImage";
const WhatWeOffer = () => {
  const whatWeOffer = [
    {
      title: "مهارة وخبرة فريق العمل",
      desc: "يتمتع فريقنا بسنوات من الخبرة في المجال لضمان تقديم خدمات عالية الجودة.",
      image: "https://example.jpg"
    },
    {
      title: "رضا العملاء",
      desc: "نحن نسعى جاهدين لتقديم خدمة ممتازة وتجربة إيجابية لكل عميل",
      image: "https://example.jpg"
    },
    {
      title: "مجموعة واسعة من الخدمات",
      desc: "نحن قادرون على التعامل مع مشاكل متنوعة وتلبية احتياجات العملاء بشكل شامل.",
      image: "https://example.jpg"
    },
    {
      title: "التكلفة العادلة",
      desc: "نحن نعتقد في تقديم خدمات ذات قيمة مقابل المال. ونقدم أسعارًا عادلة وشفافة لعملائنا",
      image: "https://example.jpg"
    }
  ]

  const { data } = useSelector((state) => state.allData.data);
  const [combinedOffers, setCombinedOffers] = useState(whatWeOffer);

  const what_we_offers = data?.what_we_offers;

  useEffect(() => {
    if (what_we_offers) {
      const updatedOffers = whatWeOffer.map((offers, index) => ({
        ...offers,
        title: what_we_offers[index]?.title || offers.title,
        desc: what_we_offers[index]?.description || offers.desc,
        image: what_we_offers[index]?.image || offers.image
      }));
      setCombinedOffers(updatedOffers);
    }
  }, [what_we_offers]);

  return (
    <div className="bg-main h:!svh lg:!h-[50%] py-1 lg:py-0">
      <div className="mb-7 lg:mb-14 mx-auto h-full lg:h-[580px] ">
        <div className="mx-6 lg:mx-12 lg:h-full flex lg:flex-row flex-col justify-between items-center lg:items-end gap-2 lg:gap-6">
          <div className="flex flex-col lg:grid grid-rows-5 p-2 gap-2 lg:gap-6 ">
            {combinedOffers?.slice(0, 2).map((ele, ind) => (
              <div
                key={ind}
                className={`flex items-center gap-2   text-white ${ind == 0 ? " row-start-1" : " row-start-3"}`}
              >
                <div className="bg-second rounded-full">
                  <Image src={ele.image} width={64} height={64} alt="icon" className="" loading="lazy" />
                </div>
                <div>
                  <h3 className=" font-bold text-sm md:text-base">
                    {ele.title}
                  </h3>
                  <p className="text-xs text-[#F7F7FC] opacity-[60%] md:w-2/3 w-full">
                    {ele.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <BigImage />
          </div>
          <div className="flex flex-col lg:grid grid-rows-5 p-2 gap-2 lg:gap-6">
            {combinedOffers?.slice(2, 4).map((ele, ind) => (
              <div
                key={ind}
                className={`flex items-center gap-2   text-white${ind == 0 ? " row-start-2" : " row-start-4"}`}
              >
                <div className="bg-second rounded-full w-[64px]">
                  <Image src={ele?.image} width={64} height={64} alt="icon" className="w-full" />
                </div>
                <div>
                  <h3 className="font-bold text-sm lg:text-base">
                    {ele.title}
                  </h3>
                  <p className="text-xs text-[#F7F7FC] opacity-[60%] lg:w-2/3 w-full">
                    {ele.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer