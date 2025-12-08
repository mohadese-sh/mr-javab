import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src="/images/mrgavab.png" alt="MRJAVAB" className="hero-image" />
        </div>
        <h1 className="hero-title">
          <span className="title-part">هر جا، هر وقت، با </span>
          <span className="title-highlight">مستر جواب</span>
          <span className="title-part"> یاد بگیر</span>
        </h1>
        <p className="hero-subtitle">
          هر سوالی داری بپرس؛ از کسر و معادله تا مشتق و انتگرال — جواب + توضیح
          کامل
        </p>
        <div className="hero-cta-container">
          <p className="cta-text">
            حل معادلات پیچیده با آموزش گام‌به‌گام در اشتراک پرو.
          </p>
          <div className="upgrade-btn-container">
            <span className="upgrade-text">ارتقا بده!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
