import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './styles/index.css';

// Global Components
import Sidebar from './components/Sidebar/Sidebar';
import MobileHeader from './components/Header/MobileHeader';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Plans from './pages/Plans';
import PdfHelper from './pages/PdfHelper';
import QuizMaker from './pages/QuizMaker';
import BookChat from './pages/BookChat';
import Summarizer from './pages/Summarizer';
import FunctionsList from './pages/FunctionsList';
import Login from './pages/Login';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile sidebar when resizing to desktop
      if (window.innerWidth >= 1024) {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isDesktop && isMobileSidebarOpen) {
        const sidebar = document.querySelector('.sidebar');
        const hamburgerMenu = document.getElementById('hamburgerMenu');

        if (
          sidebar &&
          !sidebar.contains(event.target) &&
          hamburgerMenu &&
          !hamburgerMenu.contains(event.target)
        ) {
          setIsMobileSidebarOpen(false);
        }
      }
    };

    if (isMobileSidebarOpen && !isDesktop) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileSidebarOpen, isDesktop]);

  // Handle sidebar collapse and main content margin
  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent && isDesktop) {
      if (isSidebarCollapsed) {
        mainContent.style.marginRight = '60px';
      } else {
        mainContent.style.marginRight = '280px';
      }
    } else if (mainContent) {
      mainContent.style.marginRight = '0';
    }
  }, [isSidebarCollapsed, isDesktop]);

  return (
    <div className="App" dir="rtl" lang="fa">
      {/* Global Header - Mobile only */}
      {!isDesktop && !isLoginPage && (
        <MobileHeader
          onMenuClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />
      )}

      {/* Mobile Overlay */}
      {!isDesktop && !isLoginPage && (
        <div
          className={`mobile-sidebar-overlay ${
            isMobileSidebarOpen ? 'overlay-visible' : ''
          }`}
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Global Sidebar - Desktop and Mobile */}
      {!isLoginPage && (
        <Sidebar
          isCollapsed={isDesktop ? isSidebarCollapsed : false}
          onToggle={
            isDesktop
              ? () => setIsSidebarCollapsed(!isSidebarCollapsed)
              : () => setIsMobileSidebarOpen(false)
          }
          isMobile={!isDesktop}
          isMobileOpen={isMobileSidebarOpen}
        />
      )}

      {/* Main Content */}
      <main className={`main-content ${isLoginPage ? 'login-page-main' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/problem-solver" element={<Home />} />
          <Route path="/pdf-helper" element={<PdfHelper />} />
          <Route path="/quiz-maker" element={<QuizMaker />} />
          <Route path="/book-chat" element={<BookChat />} />
          <Route path="/summarizer" element={<Summarizer />} />
          <Route path="/functions-list" element={<FunctionsList />} />
        </Routes>

        {/* Global Footer */}
        {!isLoginPage && <Footer />}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
