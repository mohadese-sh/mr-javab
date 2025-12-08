import './MobileHeader.css';

const MobileHeader = ({ onMenuClick }) => {
  return (
    <header className="mobile-header">
      <button
        className="hamburger-menu"
        id="hamburgerMenu"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="mobile-logo">
        <div className="mobile-logo-image-container">
          <img src="/images/mrgavab.png" alt="MRJAVAB" className="hero-image" />
        </div>
        <span>MRJAVAB</span>
      </div>
    </header>
  );
};

export default MobileHeader;
