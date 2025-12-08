import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'خروجی خلاصه و مفصل',
      icons: [
        'summary-modes-1.svg',
        'summary-modes-3.svg',
        'summary-modes-2.svg',
      ],
      description:
        'تمامی محصولات به تضمین اصالت و کیفیت ارائه می شوند تا با اطمینان کامل خرید کنید.',
    },
    {
      title: 'استخراج نکات کلیدی',
      icons: ['key-extract-1.svg', 'key-extract-3.svg', 'key-extract-2.svg'],
      description: 'نکات کلیدی توسط الگوریتم هشت مرحله استخراج میشوند.',
    },
    {
      title: 'حل مسئله در شش مرحله',
      icons: [
        'problem-solving-1.svg',
        'problem-solving-3.svg',
        'problem-solving-2.svg',
      ],
      description:
        'با شش گام ساده، مسائل پیچیده رو حل کنید و مهارت هاتون رو ارتقا بدید!',
    },
    {
      title: 'طراحی نمونه سوال',
      icons: ['quiz-maker-1.svg', 'quiz-maker-3.svg', 'quiz-maker-2.svg'],
      description:
        'جهت نصب راه اندازی با بررسی تخصصی کارشناسان ما در محل شما حاضر می شوند.',
    },
    {
      title: 'تشخیص متن از تصویر',
      icons: [
        'image-to-text-1.svg',
        'image-to-text-3.svg',
        'image-to-text-2.svg',
      ],
      description:
        'با درگاه این سبزیی پرداختی سریع، آسان و مافمان را تجربه کنید.',
    },
    {
      title: 'گفتگوی تعاملی با فایل',
      icons: ['file-chat-1.svg', 'file-chat-3.svg', 'file-chat-2.svg'],
      description:
        'ما در کنار شما هستیم از تعمیر تا نگهداری تخصصی برای افزایش عمر و کارایی',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">ویژگی ما</h2>
        <p className="section-subtitle">چرا باید ما را انتخاب کنید</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <div className="feature-icons">
                <div className="feature-icon feature-icon-side">
                  <img src={`/icons/${feature.icons[0]}`} alt="Icon 1" />
                </div>
                <div className="icon-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
                <div className="feature-icon feature-icon-center">
                  <img src={`/icons/${feature.icons[1]}`} alt="Icon 2" />
                </div>
                <div className="icon-connector">
                  <div className="connector-line-left"></div>
                  <div className="connector-dot"></div>
                </div>
                <div className="feature-icon feature-icon-side">
                  <img src={`/icons/${feature.icons[2]}`} alt="Icon 3" />
                </div>
              </div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
