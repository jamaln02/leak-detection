import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#FAFDFF]" id="contact">
        <div className="md:p-6 p-4">
          <div className="md:px-10 px-4">
            <div className="lg:flex md:flex justify-between items-center gap-6 flex-wrap w-full">
              <div className="lg:w-[25%] md:w-1/3 w-full text-center  md:text-right md:my-10 my-4 flex flex-col items-center gap-4">
                <div>
                  <Image src={"/logo-2.png"} alt="logo" width={100} height={100} className="md:w-[100px] w-[75px] "></Image>
                </div>
                <p className="text-sm md:text-lg  md:max-w-[260px]">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص العربى
                </p>
                <div className='flex items-center gap-4'>
                  <Image src={"/Facebook.svg"} width={12} height={25} alt='Facebook Icon' />

                  <Image src={"/YouTube.svg"} width={18} height={30} alt='YouTube Icon' />

                  <Image src={"/Instagram.svg"} width={18} height={30} alt='Instagram Icon' />

                  <Image src={"/Twitter.svg"} width={18} height={30} alt='Twitter Icon' />
                </div>
              </div>
              <div className="lg:w-1/5 md:w-1/3 w-full md:my-10 my-6 flex flex-col items-center md:items-start gap-4">
                <p className="text-base md:text-2xl font-medium md:mb-5 mb-2">هل لديك اسئله</p>
                <div className='md:text-end text-center md:text-lg text-sm'>
                  <div className='flex items-center   gap-2'>
                    contact@company.com {' '}
                    <Image src={"/Email.svg"} width={20} height={20} alt='Email Icon' />
                  </div>
                  <div className='flex items-center justify-center gap-2'>
                    (414) 687 - 5892
                    <Image src={"/Phone.svg"} width={20} height={20} alt='Phone Icon' />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/5 md:w-1/3 w-full my-6 md:my-10 flex flex-col items-center md:items-start gap-4">
                <p className="text-base md:text-2xl font-medium mb-2 md:mb-5">الوصول السريع</p>
                <ul>
                  <li className="text-sm md:text-lg">خدماتنا</li>
                  <li className="text-sm md:text-lg">اطلب الخدمه</li>
                </ul>
              </div>
              <div className="lg:w-1/5 md:w-1/3 w-full my-6 md:my-10 flex flex-col items-center md:items-start gap-4">
                <p className="text-base md:text-2xl font-medium mb-2 md:mb-5">حول موقعنا</p>
                <ul className="text-center">
                  <li className="text-sm md:text-lg">من نحن</li>
                  <li className="text-sm md:text-lg">تواصل معنا</li>
                  <li className="text-sm md:text-lg">الشروط والاحكام</li>
                  <li className="text-sm md:text-lg">سياسه الخصوصيه</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end items-center gap-5">
              <Image
                src={"/appStore.png"}
                width={120}
                height={40}
                alt="appStore"
                className=" w-[120px]"
              ></Image>
              <Image
                src={"/googlePlay.png"}
                width={130}
                height={40}
                alt="googlePlay"
                className=" w-[135px]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-second'>
        <p className='text-white text-center py-6 md:py-10 text-sm md:text-lg'>جميع الحقوق محفوظة - موقع كشف تسريبات</p>
      </div>
    </div>
  )
}

export default Footer