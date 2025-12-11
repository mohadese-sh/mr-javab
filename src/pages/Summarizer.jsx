import Hero from '../components/Hero/Hero';
import HowToUse from '../components/HowToUse/HowToUse';
import Features from '../components/Features/Features';
import FAQ from '../components/FAQ/FAQ';
import Testimonials from '../components/Testimonials/Testimonials';

const Summarizer = () => {
  const HOW_TO_USE_DATA = [
    {
      number: 1,
      title: 'خلاصه سازی جامع و استخراج نکات کلیدی',
      description:
        'فایل یا عکس خود را ارسال کنید تا مستر جواب خلاصه کامل یا نکات مهم آن را برایتان آماده کند.',
      image: '/images/summarizer-1.png',
      reverse: false,
    },
    {
      number: 2,
      title: 'تولید خلاصه هوشمند از متن و تصویر',
      description:
        'کافی‌ست فایل یا تصویر مطلب خود را بفرستید تا مستر جواب از شما بپرسد: خلاصه جامع می‌خواهید یا فقط نکات کلیدی؟',
      image: '/images/summarizer-2.png',
      reverse: true,
    },
    {
      number: 3,
      title: 'استخراج حرفه ای، خلاصه و نکات آموزشی',
      description:
        'با ارسال فایل یا عکس، مستر جواب محتوای شما را تحلیل کرده و نسخه خلاصه یا نکات کلیدی آن را ارائه می‌دهد.',
      image: '/images/summarizer-3.png',
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

export default Summarizer;
