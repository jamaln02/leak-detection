"use client"

import { openLoginModal } from '@/ReduxSystem/Slices/authSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const UserLoginIcon = () => {
    const dispatch = useDispatch();
    
  return (
    <div onClick={() => dispatch(openLoginModal())}>
                <img
                  src={"Group 13.png"}
                  width={50}
                  height={50}
                  alt="user-icon"
                  className="cursor-pointer"
                  
                />
    </div>
  )
}

export default UserLoginIcon