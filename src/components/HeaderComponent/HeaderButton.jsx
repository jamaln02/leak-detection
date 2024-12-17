"use client"
import {  openMenu } from '@/ReduxSystem/Slices/dataSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const HeaderButton = () => {
  const dispatch=useDispatch()
  return (
    <button
    className="md:hidden text-white focus:outline-none"
    onClick={() => dispatch(openMenu())}
  >
    <div className="w-6 h-0.5 bg-white mb-1"></div>
    <div className="w-6 h-0.5 bg-white mb-1"></div>
    <div className="w-6 h-0.5 bg-white"></div>
  </button>
  )
}

export default HeaderButton