import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

// Global Components
import Sidebar from './components/Sidebar/Sidebar';
import MobileHeader from './components/Header/MobileHeader';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import ProblemSolver from './pages/ProblemSolver';
import PdfHelper from './pages/PdfHelper';
import QuizMaker from './pages/QuizMaker';
import BookChat from './pages/BookChat';
import Summarizer from './pages/Summarizer';
import FunctionsList from './pages/FunctionsList';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

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
    <Router>
      <div className="App" dir="rtl" lang="fa">
        {/* Global Header - Mobile only */}
        {!isDesktop && <MobileHeader />}

        {/* Global Sidebar - Desktop only */}
        {isDesktop && (
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        )}

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem-solver" element={<Home />} />
            <Route path="/pdf-helper" element={<PdfHelper />} />
            <Route path="/quiz-maker" element={<QuizMaker />} />
            <Route path="/book-chat" element={<BookChat />} />
            <Route path="/summarizer" element={<Summarizer />} />
            <Route path="/functions-list" element={<FunctionsList />} />
          </Routes>

          {/* Global Footer */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
