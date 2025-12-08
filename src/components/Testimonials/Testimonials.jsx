import { useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const enableHorizontalScroll = (element) => {
      if (!element) return;

      const handleWheel = (e) => {
        if (window.innerWidth >= 640 && window.innerWidth <= 1023) {
          e.preventDefault();
          element.scrollLeft += e.deltaY;
        }
      };

      element.addEventListener('wheel', handleWheel, { passive: false });
      return () => element.removeEventListener('wheel', handleWheel);
    };

    const leftCleanup = enableHorizontalScroll(leftColumnRef.current);
    const rightCleanup = enableHorizontalScroll(rightColumnRef.current);

    return () => {
      if (leftCleanup) leftCleanup();
      if (rightCleanup) rightCleanup();
    };
  }, []);

  const testimonials = [
    {
      name: 'سمیرا',
      text: 'مستر جوابه واقعاً فوق العاده ست! مسائل ریاضی پیچیده ام رو در چند ثانیه با توضیح کامل حل کرد. خیلی راحت و کاربردیه!',
    },
    {
      name: 'جواد',
      text: 'مستر جوابه واقعاً فوق العاده ست! مسائل ریاضی پیچیده ام رو در چند ثانیه با توضیح کامل حل کرد. خیلی راحت و کاربردیه!',
    },
    {
      name: 'مسعود',
      text: 'مستر جوابه واقعاً فوق العاده ست! مسائل ریاضی پیچیده ام رو در چند ثانیه با توضیح کامل حل کرد. خیلی راحت و کاربردیه!',
    },
    {
      name: 'محمد علی',
      text: 'مستر جوابه واقعاً فوق العاده ست! مسائل ریاضی پیچیده ام رو در چند ثانیه با توضیح کامل حل کرد. خیلی راحت و کاربردیه!',
    },
    {
      name: 'ایرج',
      text: 'مستر جوابه واقعاً فوق العاده ست! مسائل ریاضی پیچیده ام رو در چند ثانیه با توضیح کامل حل کرد. خیلی راحت و کاربردیه!',
    },
    {
      name: 'بیتا',
      text: 'مستر جوابه واقعاً فوق العاده ست! مسائل ریاضی پیچیده ام رو در چند ثانیه با توضیح کامل حل کرد. خیلی راحت و کاربردیه!',
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-left">
          <div className="testimonials-text-container">
            <h2 className="testimonials-title">
              کاربران راجع به ما
              <span className="title-highlight">چه میگویند؟</span>
            </h2>
            <p className="testimonials-subtitle">
              نظرات دیگران را بخوانید و با اطمینان ثبت نام کنید.
            </p>
          </div>
          <div className="subscribe-btn-container">
            <span className="subscribe-text">خرید اشتراک</span>
            <img
              src="/icons/angle-left.svg"
              alt="Arrow"
              className="subscribe-arrow"
            />
          </div>
        </div>
        <div className="testimonials-right">
          <div className="testimonials-grid">
            <div
              ref={leftColumnRef}
              className="testimonials-column testimonials-column-left"
            >
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              ))}
            </div>
            <div
              ref={rightColumnRef}
              className="testimonials-column testimonials-column-right"
            >
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
