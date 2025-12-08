import { useState } from 'react';
import { FAQ_DATA } from '../../data/faqData';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">سوالات متداول</h2>
        <p className="section-subtitle">سوالات پرتکرار کاربران</p>
        <div className="faq-container">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${item.isLast ? 'faq-item-last' : ''} ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <span className="faq-title">{item.question}</span>
                <img
                  src="/icons/left-arrow.svg"
                  alt="Arrow"
                  className="faq-arrow"
                />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
              <div className="faq-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
