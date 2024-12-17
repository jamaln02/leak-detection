"use client"
import { getHomeData } from '@/ReduxSystem/Slices/dataSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const HeroVideo = () => {

  const { data } = useSelector(
    (state) => state.allData
  );
  const myVideo = data?.data?.home_slider?.video;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className="relative my-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] mx-auto md:absolute md:bottom-[10%] md:right-[10%] ">
        <div className=" w-full h-full absolute rounded-full  bg-[#00377366] "></div>
        <img
          className="w-full h-full object-cover rounded-full relative"
          src="poster.png"
          alt="videoPoster"
        />
        <div className='w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-second absolute top-[40%] left-[38%] flex items-center justify-center z-10 cursor-pointer'>
          <img src="Vector.svg" width={15} height={15} alt='' onClick={openModal} />
        </div>

      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="relative w-[80%] max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute top-[-20px] right-[-20px] text-white text-xl"
            >
              ×
            </button>
            <video controls className="w-full h-auto" src={myVideo}>
            </video>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroVideo