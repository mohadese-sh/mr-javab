import FAQ from '../components/FAQ/FAQ';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import HowToUse from '../components/HowToUse/HowToUse';
import Testimonials from '../components/Testimonials/Testimonials';

const QuizMaker = () => {
  const HOW_TO_USE_DATA = [
    {
      number: 1,
      title: 'متن، عکس یا صفحه‌ ای کتاب خود را ارسال کنید.',
      description:
        'سیستم به‌صورت خودکار از آن سؤال طراحی می‌کند، بدون نیاز به هیچ توضیحی!',
      image: '/images/quiz-maker-1.png',
      reverse: false,
    },
    {
      number: 2,
      title: 'سئوالت را هوشمندانه بساز !',
      description:
        'کافی‌ست مطلب یا تصویر موردنظر را بفرستی تا در سه سطح آسان، متوسط و سخت، سؤال تولید شود.',
      image: '/images/quiz-maker-2.png',
      reverse: true,
    },
    {
      number: 3,
      title: 'فقط بنویس و نسبت سختیو مشخص کن !',
      description:
        'اگر بخواهی سطح سؤال‌ها بالاتر رود، بنویس «سؤال سخت‌تر طراحی کن» تا سیستم خودش تنظیم کند.',
      image: '/images/quiz-maker-3.png',
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

export default QuizMaker;
