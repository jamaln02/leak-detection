'use client'
import { openMenu } from '@/ReduxSystem/Slices/dataSlice';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';

const HeaderListLink = () => {
    const dispatch = useDispatch()
    return (
        <ul className='flex flex-col items-center gap-6 mt-20 md:mt-0 md:flex-row md:gap-8 text-white'><li className='z-50'>
            <Link href="#home" className="hover:text-gray-300 transition" onClick={() => dispatch(openMenu())}>
                الرئيسية
            </Link>
        </li><li>
                <Link href="#services" className="hover:text-gray-300 transition" onClick={() => dispatch(openMenu())}>
                    خدمات
                </Link>
            </li><li>
                <Link href="#about" className="hover:text-gray-300 transition" onClick={() => dispatch(openMenu())}>
                    من نحن
                </Link>
            </li><li>
                <Link href="#contact" className="hover:text-gray-300 transition" onClick={() => dispatch(openMenu())}>
                    تواصل معنا
                </Link>
            </li></ul>
    )
}

export default HeaderListLink