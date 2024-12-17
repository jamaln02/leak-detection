import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo.png';
import lang from '@/../public/Group.svg';
import notification from '@/../public/notification-bing.svg';
import UserLoginIcon from './UserLoginIcon';
import HeaderButton from './HeaderButton';
import HeaderListLink from './HeaderListLink';
import HeaderNav from './HeaderNav';
const Header = () => {

  return (
    <header className="bg-main flex justify-between px-6 md:px-0 md:justify-evenly items-center py-4 border border-b border-[#0A4088] gap-8">
      <div>
        <Image src={Logo} width={71} height={37} alt="logo" />
      </div>
      <HeaderButton/>
      <HeaderNav
      >
        <ul className=" flex flex-col items-center gap-6 md:flex-row md:gap-8 text-white">
        <li>
        <HeaderListLink/>
          </li> 
        
          <li className="md:hidden flex items-center gap-2">
            <div className="relative">
              <Image
                src={notification}
                width={40}
                height={40}
                alt="notification-bing"
                className="bg-[#FFFFFF0D] p-2 rounded-xl cursor-pointer"
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
          </li>
          <li className="md:hidden">
          <UserLoginIcon/>
          </li>
          <li className="md:hidden flex items-center gap-1 cursor-pointer text-white text-sm font-medium">
            <select
              className="bg-transparent cursor-pointer appearance-none outline-none"
              dir="ltr"
            >
              <option className="bg-main" value="EN">
                EN
              </option>
              <option className="bg-main" value="AR">
                AR
              </option>
            </select>
            <Image src={lang} alt="lang-icon" />
          </li>
        </ul>
      </HeaderNav>
      <div className="hidden md:flex items-center gap-6">
        <div className="relative">
          <Image
            src={notification}
            width={50}
            height={50}
            alt="notification-bing"
            className="bg-[#FFFFFF0D] p-3 rounded-xl cursor-pointer"
          />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
          <UserLoginIcon/>
        <div className="flex items-center gap-1 cursor-pointer text-white text-sm font-medium">
          <select
            className="bg-transparent cursor-pointer appearance-none outline-none"
            dir="ltr"
          >
            <option className="bg-main" value="EN">
              EN
            </option>
            <option className="bg-main" value="AR">
              AR
            </option>
          </select>
          <Image src={lang} alt="lang-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
