import Hero from '../components/Hero/Hero';
import HowToUse from '../components/HowToUse/HowToUse';
import Features from '../components/Features/Features';
import FAQ from '../components/FAQ/FAQ';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  const HOW_TO_USE_DATA = [
    {
      number: 1,
      title: 'سوال خود را تایپ یا فایل آن را ارسال نمایید.',
      description:
        'مسائل ریاضی خود را به‌راحتی وارد کنید یا فایل آن‌ها را آپلود کنید تا پاسخ سریع و دقیق دریافت کنید!',
      image: '/images/step-1-1.png',
      reverse: false,
    },
    {
      number: 2,
      title: 'منتظر باشید تا دستیار سوال را تحلیل کند.',
      description:
        'سیستم هوشمند ما سوال شما را تحلیل کرده و بهترین راه حل را آماده می‌کند.',
      image: '/images/step-1-2.png',
      reverse: true,
    },
    {
      number: 3,
      title: 'جواب را همراه با راه حل کامل مشاهده کنید.',
      description:
        'پاسخ کامل همراه با توضیحات گام به گام و راه حل دقیق را مشاهده کنید.',
      image: '/images/step-1-3.png',
      reverse: false,
    },
  ];

  return (
    <>
      <Hero />
      <HowToUse data={HOW_TO_USE_DATA} />
      <Features />
      <FAQ />
      <Testimonials />
    </>
  );
};

export default Home;
