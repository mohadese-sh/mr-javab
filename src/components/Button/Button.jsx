import './Button.css';

const Button = ({
  children,
  onClick,
  disabled,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
