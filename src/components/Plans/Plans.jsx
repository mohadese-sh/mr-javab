import './Plans.css';

const Plans = () => {
  const plans = [
    {
      id: 'normal',
      name: 'معمولی',
      subtitle: 'به صرفه',
      price: 'رایگان',
      priceType: 'به صورت ماهانه',
      originalPrice: null,
      discount: null,
      badge: 'رایگان',
      requestCount: 5,
      features: [
        { text: 'تشخیص حرفه‌ای نمادهای ریاضی', icon: 'bullet' },
        { text: 'امکان دریافت فایل PDF و Word', icon: 'bullet' },
        { text: 'نوشتن مقاله', icon: 'bullet' },
        { text: 'قابلیت آپلود فایل تا 8 مگابایت', icon: 'bullet' },
        {
          text: 'حل سوالات با مدل مستر جواب پایه (بدون دانلود PDF و Word)',
          icon: 'lock',
        },
        { text: 'محدودیت درخواست روزانه 5 درخواست', icon: 'bullet' },
        { text: 'نوشتن مقاله', icon: 'lock' },
      ],
      description:
        'این سرویس برای حل مسائل در سطح متوسط مناسب است. برای سوالات ریاضی، فیزیک و هندسه توصیه می‌شود از سرویس مستر استفاده کنید تا دقیق‌ترین پاسخ را دریافت کنید.',
      buttonText: 'ارتقا به مستر',
      bottomPrice: '۰ تومان',
    },
    {
      id: 'master',
      name: 'مستر',
      subtitle: 'به صرفه',
      price: '۱۱۵ هزار تومان',
      priceType: 'به صورت ماهانه',
      originalPrice: '۱/۱۵۰/۰۰ تومان',
      discount: 'با ۵۰% تخفیف',
      badge: 'حرفه ای',
      requestCount: 100,
      features: [
        { text: 'تمام ویژگی‌های سرویس نابغه', icon: 'bullet' },
        {
          text: 'امکان استفاده از دو مدل هوش مصنوعی (هوشمند برای مسائل پیچیده/محاسباتی، سریع برای مسائل حفظی/توضیحی)',
          icon: 'bullet',
        },
        { text: 'جستجو و حل مسئله بر اساس کتاب درسی کاربر', icon: 'bullet' },
        {
          text: 'طراحی نمونه سوال در 3 سطح (آسان، متوسط، دشوار)',
          icon: 'bullet',
        },
        {
          text: 'امکان دریافت خروجی PDF و Word از تمام پاسخ‌های هوش مصنوعی و ویرایش آن‌ها',
          icon: 'bullet',
        },
        {
          text: 'طراحی مقالات به صورت اصولی و دسته‌بندی شده از منابع اطلاعاتی معتبر',
          icon: 'bullet',
        },
        { text: 'قابلیت آپلود فایل تا 10 مگابایت', icon: 'bullet' },
      ],
      description: null,
      buttonText: 'ارتقا به مستر',
      bottomPrice: '۱۱۵ هزار تومان',
      bottomDiscount: '۵۰% تخفیف ویژه',
    },
    {
      id: 'normal',
      name: 'نابغه',
      subtitle: 'به صرفه',
      price: '۷۰ هزار تومان',
      priceType: 'به صورت ماهانه',
      originalPrice: '۷/۱۵۰/۰ تومان',
      discount: 'با ۴۰% تخفیف',
      badge: 'محبوب',
      requestCount: 50,
      features: [
        { text: 'حل مسئله', icon: 'bullet' },
        { text: 'رسم نمودار', icon: 'bullet' },
        {
          text: 'توضیح ساده‌تر و خلاصه‌تر مسائل (در صورت درخواست کاربر)',
          icon: 'bullet',
        },
        {
          text: 'خلاصه‌سازی و استخراج نکات کلیدی از فایل‌ها (دو مدل: خلاصه نکات کلیدی و خلاصه مفصل)',
          icon: 'bullet',
        },
        { text: 'نوشتن مقاله', icon: 'bullet' },
        { text: 'قابلیت آپلود فایل تا 8 مگابایت', icon: 'bullet' },
      ],
      description:
        'پاسخ‌ها فقط از سرور سریع مستر ارائه می‌شود (اغلب برای سوالات غیر پیچیده مناسب است).',
      buttonText: 'ارتقا به نابغه',
      bottomPrice: '۷۰ هزار تومان',
      bottomDiscount: '۴۰% تخفیف ویژه',
    },
  ];

  return (
    <section className="plans-section">
      <div className="plans-container">
        <h2 className="plans-title">انواع حساب کاربری</h2>
        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`plan-card ${plan.id}`}>
              {/* Corner Ribbon */}
              {plan.badge && (
                <div className="plan-corner-ribbon">
                  <span className="ribbon-text">{plan.badge}</span>
                </div>
              )}

              {/* Section 1: Diamond Icon Container */}
              <div className="plan-icon-container">
                <img
                  src="/icons/diamond.svg"
                  alt="Diamond"
                  className="plan-icon"
                  width={24}
                  height={24}
                />
              </div>

              {/* Section 2: Title and Badge */}
              <div className="plan-title-section">
                <h3 className="plan-name">{plan.name}</h3>
                {plan.subtitle && (
                  <div className="plan-subtitle-badge">
                    <span className="plan-subtitle-text">{plan.subtitle}</span>
                  </div>
                )}
              </div>

              {/* Section 3: Price Type Text */}
              <p className="plan-price-type">{plan.priceType}</p>

              {/* Section 4: Large Price with Border */}
              <div className="plan-price-section">
                {plan.price === 'رایگان' ? (
                  <span className={`plan-price ${plan.id}-price`}>
                    {plan.price}
                  </span>
                ) : (
                  <div className="plan-price-split">
                    <span className="plan-price-number">
                      {plan.price.match(
                        /[\d\u06F0-\u06F9\u0660-\u0669]+/
                      )?.[0] || ''}
                    </span>
                    <span className="plan-price-text">
                      {plan.price
                        .replace(/[\d\u06F0-\u06F9\u0660-\u0669]+/, '')
                        .trim()}
                    </span>
                  </div>
                )}
                {plan.discount && (
                  <span
                    className={`plan-price-discount ${plan.id}-price-discount`}
                  >
                    {plan.discount}
                  </span>
                )}
                <div className="plan-price-border"></div>
              </div>

              {/* Section 5: Features List */}
              <ul className="plan-features">
                {plan.features.map((feature, index) => {
                  const featureData =
                    typeof feature === 'object' ? feature : { text: feature };
                  const iconType = featureData.icon || 'bullet';
                  return (
                    <li key={index} className="plan-feature">
                      <img
                        src={`/icons/${iconType}.svg`}
                        alt={iconType === 'lock' ? 'Locked' : 'Available'}
                        className={`plan-feature-icon ${
                          iconType === 'lock' ? 'plan-feature-icon-lock' : ''
                        }`}
                      />
                      <span className="plan-feature-text">
                        {featureData.text || feature}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Section 6: Request Count */}
              <div className="plan-request-count">
                تعداد درخواست ها {plan.requestCount}
              </div>

              {/* Section 7: Description */}
              {plan.description && (
                <p className="plan-description">{plan.description}</p>
              )}

              {/* Section 8: Bottom Price Section */}
              <div className="plan-bottom-price-section">
                {plan.id === 'normal' ? (
                  <span className="plan-free-price">{plan.bottomPrice}</span>
                ) : (
                  <div className="plan-price-details">
                    <div className="plan-price-details-left">
                      <span className="plan-discount-percent">
                        {plan.bottomDiscount
                          ?.replace('تخفیف ویژه', '')
                          .replace('تخفیف', '')
                          .trim()}
                      </span>
                      <span className="plan-discount-text">تخفیف</span>
                    </div>
                    <div className="plan-price-details-right">
                      <div className="plan-original-price-row">
                        <span className="plan-original-price">
                          {plan.originalPrice}
                        </span>
                        <span className="plan-original-price-label">تومان</span>
                      </div>
                      <span className="plan-final-price">
                        {plan.bottomPrice}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 9: Button */}
              <button
                className={`plan-upgrade-btn ${
                  plan.id === 'normal' ? 'ghost' : 'fill'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
