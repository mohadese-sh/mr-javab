import './HowToUse.css';

const HowToUse = () => {
  const steps = [
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
    <section className="how-to-use">
      <div className="container">
        <h2 className="section-title">چطوری استفاده کنم</h2>
        <p className="section-subtitle">مراحل استفاده از مستر جواب</p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${step.reverse ? 'step-reverse' : ''}`}
            >
              <div className="step-content">
                <div className="step-left">
                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                <div className="step-right">
                  <div className="step-icon-box">
                    <img
                      src={step.image}
                      alt={`Step ${step.number}`}
                      className="step-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
