import FAQ from '../components/FAQ/FAQ';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import HowToUse from '../components/HowToUse/HowToUse';
import Testimonials from '../components/Testimonials/Testimonials';

const PdfHelper = () => {
  const HOW_TO_USE_DATA = [
    {
      number: 1,
      title: 'موضوع تحقیق یا مقاله خود را ارسال کنی.',
      description:
        'موضوع تحقیق یا مقاله خود را ارسال کنی تا دستیار ما به شما کمک کند.',
      image: '/images/pdf-1.png',
      reverse: false,
    },
    {
      number: 2,
      title: 'کافیست عنوان پژوهش یا موضوع موردنظرتان را بنویسید',
      description:
        'سیستم همیار مقاله به‌صورت تخصصی مقاله‌ای جامع و مستند برایتان می‌نویسد.',
      image: '/images/pdf-2.png',
      reverse: true,
    },
    {
      number: 3,
      title: 'ایده تان را بنوبسید تا مقاله اتان را تحویل بگیرید',
      description:
        'همیار مقاله با منابع معتبر، متن پژوهشی شما را آماده می‌کند.',
      image: '/images/pdf-3.png',
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

export default PdfHelper;
