import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import HowToUse from '../components/HowToUse/HowToUse';
import FAQ from '../components/FAQ/FAQ';
import Testimonials from '../components/Testimonials/Testimonials';

const BookChat = () => {
  const HOW_TO_USE_DATA = [
    {
      number: 1,
      title: 'فایل کتاب خود را ارسال و گفتگو با آن را آغاز کنید',
      description:
        'می‌توانید هر سؤال یا جست‌وجویی از محتوای کتاب داشته باشید و پاسخ دقیق همراه با صفحه‌ی منبع دریافت کنید.',
      image: '/images/book-chat-1.png',
      reverse: false,
    },
    {
      number: 2,
      title: 'کتابتان را بفرستید و از مستر جواب پرسجو کنید',
      description:
        'او بر اساس محتوای کتاب پاسخ می‌دهد و حتی صفحات مربوط به پاسخ را مشخص می‌کند.',
      image: '/images/book-chat-2.png',
      reverse: true,
    },
    {
      number: 3,
      title: 'با کتاب خود گفت وگو کنید',
      description:
        'فقط فایلش را ارسال کنید تا بتوانید در آن جست‌وجو کنید، سؤال بپرسید یا توضیح بخواهید و پاسخ‌های مستند بگیرید.',
      image: '/images/book-chat-3.png',
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

export default BookChat;
