import React from "react";
import Image from "next/image";
const MobileApp = () => {
  return (
    <div className="container mx-auto h-auto lg:h-[92vh] px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:p-10 gap-12 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-start">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[40px] md:leading-[50px] lg:leading-[60px] w-[100%] lg:w-[80%]">
              مهمتنا هي توفير خدمات منزلك بأقل التكاليف
            </h1>
          </div>
          <div className="text-base md:text-lg lg:text-xl font-[400] text-[#ADB3DA]">
            <p>حمل تطبيقنا مجانا</p>
            <p>استمتع بالطلب السريع للفني و الخدمة في أي وقت</p>
          </div>
          <div className="w-[100%] md:w-[63%]">
            <Image
              src={"/arrow.svg"}
              width={100}
              height={70}
              alt="arrow"
              className="w-fit float-end"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-5">
            <Image
              src={"/appStore.png"}
              width={165}
              height={52}
              alt="appStore"
              className="w-1/3 sm:w-[40%] md:w-2/5 lg:w-2/3"
            />
            <Image
              src={"/googlePlay.png"}
              width={165}
              height={52}
              alt="googlePlay"
              className="w-1/3 sm:w-[40%] md:w-2/5 lg:w-2/3"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/mobile.png"}
            width={500}
            height={550}
            alt="mobile"
            className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[80%] max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
