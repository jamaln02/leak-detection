import React from 'react'
import { useSelector } from 'react-redux';
import Image from 'next/image';
const ServicesImages = () => {

  const { data } = useSelector(state => state.allData)

  const ServicesData = data?.data?.services;
  return (
    <div className="images gap-6 flex justify-around flex-col-reverse relative md:h-[550px] items-center ml-5">
      {ServicesData?.map((service, index) =>
        index < 2 ? (
          <div key={index}>
            <div className="service-card lg:w-[200px] md:w-[150px] w-[120px] bg-white px-5 rounded-2xl shadow-lg text-center">
              <Image
                width={120}
                height={120}
                src={service?.main_image?.media}
                alt="Service"
                className="w-full object-cover rounded-lg mb-4"
              />
            </div>
            <p className="text-center font-bold mb-2 text-second">فني كشف عوازل</p>
          </div>
        ) : null
      )}

    </div>
  )
}

export default ServicesImages