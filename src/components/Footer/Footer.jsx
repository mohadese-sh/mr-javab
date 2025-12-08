import './Footer.css';

const Footer = () => {
  const footerLinks = {
    'لینک های اصلی': [
      'معلم ریاضی',
      'خلاصه ساز',
      'ساخت نمونه سئوال',
      'ارتقا حساب کاربری',
      'قوانین و مقررات سایت',
    ],
    'ساعات پاسخگویی': [
      'شنبه تا پنجشنبه',
      '۸ تـــــــــــــــــــــــــــا ۲۲',
      'جمعه',
      'تعطیـــــــــــــــــــــــــل',
    ],
    'راه های ارتباطی': ['۰۹۱۳۰۵۳۷۰۱۰', 'تهران، شرافت هشت، ساختمان کاج'],
  };

  const socialIcons = [
    { icon: 'icons/meta.svg', alt: 'Meta' },
    { icon: 'icons/whatsapp.svg', alt: 'WhatsApp' },
    { icon: 'icons/instagram.svg', alt: 'Instagram', isInstagram: true },
    { icon: 'icons/x.svg', alt: 'X' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {Object.entries(footerLinks).map(([title, links], index) => (
          <div key={index} className="footer-column">
            <h3 className="footer-title">{title}</h3>
            <ul className="footer-links">
              {links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-column footer-column-badges">
          <div className="footer-badge">
            <img
              src="/images/enamad.svg"
              alt="Enamad"
              className="badge-image"
            />
          </div>
          <div className="footer-badge">
            <img
              src="/images/resane.svg"
              alt="Resane"
              className="badge-image"
            />
          </div>
        </div>
      </div>
      <div className="footer-social-section">
        <div className="footer-social">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href="#"
              className={`social-icon ${social.isInstagram ? 'social-icon-instagram' : ''}`}
            >
              {social.isInstagram ? (
                <div className="instagram-container">
                  <img
                    src={`/${social.icon}`}
                    alt={social.alt}
                    className="instagram-icon"
                  />
                </div>
              ) : (
                <img src={`/${social.icon}`} alt={social.alt} />
              )}
            </a>
          ))}
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright">
          <p>
            © ۱۴۰۲ - تمامی حقوق برای{' '}
            <span className="copyright-highlight">مسترجواب</span> محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
