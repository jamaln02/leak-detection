import Head from "next/head";
import "./globals.css";
import MainLayout from "@/app/MainLayout";


export const metadata = {
  title: "leak-detection | كشف تسريبات",
  description: "خدمات كشف تسريبات المياه الاحترافية باستخدام أدوات وتقنيات متقدمة، مع خبراء مختصين. نحن نضمن الكشف الدقيق والاستجابة السريعة، وتقديم حلول عالية الجودة لتقليل خسارة المياه والأضرار الناتجة.",
  
};

export default function RootLayout({ children }) {
  return (

    <html lang="ar" dir="rtl">
      <Head>
        <title>خدمات كشف تسريبات المياه الاحترافية | Professional Water Leak Detection Services</title>
        <meta
          name="description"
          content="كشف تسريبات المياه الاحترافي باستخدام التكنولوجيا المتطورة والفنيين المتخصصين. الكشف السريع والدقيق والتصليح عالي الجودة لحماية منزلك أو عملك. | Expert water leak detection services with cutting-edge technology and professional technicians. Quick, accurate, and efficient leak detection for homes and businesses."
        />
        <meta
          name="keywords"
          content="كشف تسريبات المياه, تسريبات المياه, خدمات كشف التسريبات, تسريب المياه في المنزل, إصلاح التسريبات, حلول المياه الفعّالة | water leak detection, leak detection services, water leak in home, plumbing leaks, professional leak repair, efficient water solutions"
        />
        <meta name="author" content="اسم شركتك | Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="خدمات كشف تسريبات المياه الاحترافية | Professional Water Leak Detection Services"
        />
        <meta
          property="og:description"
          content="اعتمد على فريقنا المحترف للكشف عن تسريبات المياه بدقة وسرعة. احمِ منزلك أو عملك من الأضرار الناتجة عن التسريبات. | Trust our expert team for fast and accurate water leak detection. Ensure your home or business remains safe from water damage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/your-image.jpg" />
        <meta property="og:url" content="https://your-website-link.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="كشف تسريبات المياه الاحترافي | Expert Water Leak Detection Services" />
        <meta
          name="twitter:description"
          content="حافظ على ممتلكاتك مع كشف تسريبات المياه الدقيق والمهني. | Protect your property with precise and professional leak detection services."
        />
        <meta name="twitter:image" content="/public/your-image.jpg" />
      </Head>
      <body className='antialiased'>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
