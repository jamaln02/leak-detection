import Services from '@/components/Services';
import Header from '../components/HeaderComponent/Header';
import Hero from "@/components/HeroComponent/Hero";
import AboutUs from '@/components/AboutUs';
import OurServices2 from '@/components/OurServices2';
import OurExperts from '@/components/OurExperts';
import OurRatings from '@/components/OurRatings';
import WhatWeOffer from '@/components/WhatWeOffer';
import MobileApp from '@/components/MobileApp';
import Footer from '@/components/Footer';
import LoginModal from '@/components/authModal/LoginModal';
import RegisterModal from '@/components/authModal/RegisterModal';
import ForgetPasswordModal from '@/components/authModal/ForgetPasswordModal';
import ConfirmIdentityModal from '@/components/authModal/ConfirmIdentityModal';
import ChangePasswordModal from '@/components/authModal/ChangePasswordModal';

export default function Home() {
  return (
    <>
<Header/>
<LoginModal/>
<RegisterModal/>
<ForgetPasswordModal/>
<ConfirmIdentityModal/>
<ChangePasswordModal/>
<Hero/>
<Services/>
<AboutUs/>
<OurServices2/>
<OurExperts/>
<OurRatings/>
<WhatWeOffer/>
<MobileApp/>
<Footer/>
    </>
  );
}
