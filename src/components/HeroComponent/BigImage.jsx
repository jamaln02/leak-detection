"use client"
import { getHomeData } from '@/ReduxSystem/Slices/dataSlice';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const BigImage = () => {

  const { data, loading } = useSelector(
    (state) => state.allData
  );

  const myImage = data?.data?.home_slider?.big_image;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (!myImage) {
    return <div>Image not available</div>;  
  }

  return (
    <div>
      <Image
        width={480}
        height={550}
        className="max-w-[150px] h-auto md:max-w-[425px]"
        src={myImage}
        alt="workers img"
        priority
      />
    </div>
  )
}

export default BigImage
