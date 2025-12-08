import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const location = useLocation();

  const navItems = {
    'منو اصلی': [
      {
        icon: 'icons/problem-solver.svg',
        text: 'حل مسائل',
        path: '/problem-solver',
        active:
          location.pathname === '/problem-solver' || location.pathname === '/',
      },
      {
        icon: 'icons/pdf-helper.svg',
        text: 'عضو مقاله / PDF',
        path: '/pdf-helper',
        active: location.pathname === '/pdf-helper',
      },
      {
        icon: 'icons/quiz-maker.svg',
        text: 'طراحی نمونه سوال',
        path: '/quiz-maker',
        active: location.pathname === '/quiz-maker',
      },
      {
        icon: 'icons/book-chat.svg',
        text: 'چت با کتاب',
        path: '/book-chat',
        active: location.pathname === '/book-chat',
      },
      {
        icon: 'icons/summarizer.svg',
        text: 'خلاصه سازی',
        path: '/summarizer',
        active: location.pathname === '/summarizer',
      },
    ],
    گفتگوها: [
      {
        icon: 'icons/sparkle.svg',
        text: 'لیست توابع دریافتی',
        path: '/functions-list',
        active: location.pathname === '/functions-list',
      },
    ],
  };

  const handleBuyCredit = () => {
    alert('صفحه خرید اعتبار');
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <img src="/images/logo.svg" alt="MRJAVAB Logo" className="logo-img" />
          <h2 className="logo-text">MRJAVAB</h2>
        </div>
        <button
          className="sidebar-toggle"
          id="sidebarToggle"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          <img
            src="/icons/arrow-square-left.svg"
            alt="Toggle sidebar"
            className="toggle-icon"
          />
        </button>
      </div>
      <nav className="sidebar-nav">
        {Object.entries(navItems).map(([category, items]) => (
          <div key={category} className="nav-category">
            <span className="category-title">{category}</span>
            <div className="nav-items-group">
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`nav-item ${item.active ? 'active' : ''}`}
                >
                  <img
                    src={`/${item.icon}`}
                    alt={item.text}
                    className="nav-icon"
                  />
                  <span className="nav-text">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <img
            src="/images/user.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-details">
            <p className="user-name">وب ملل</p>
            <p className="user-email">sample@gmail.com</p>
          </div>
        </div>
        <div className="buy-credit-container" onClick={handleBuyCredit}>
          <div className="credit-number">2</div>
          <span className="credit-text">خرید اعتبار از شرکت وب ملل</span>
          <img
            src="/icons/angle-left.svg"
            alt="arrow"
            className="credit-arrow"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
