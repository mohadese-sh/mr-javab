import { useRef, useEffect } from 'react';
import './OTPInput.css';

const OTPInput = ({ length = 6, value, onChange, onComplete }) => {
  const inputRefs = useRef([]);
  const isMounted = useRef(false);

  useEffect(() => {
    // Focus first empty input or first input on mount
    if (!isMounted.current) {
      const firstEmptyIndex = value.findIndex((val) => !val);
      const indexToFocus = firstEmptyIndex !== -1 ? firstEmptyIndex : 0;
      setTimeout(() => {
        if (inputRefs.current[indexToFocus]) {
          inputRefs.current[indexToFocus].focus();
        }
      }, 0);
      isMounted.current = true;
    }
  }, []);

  const handleChange = (index, e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Only numbers

    if (inputValue.length > 1) {
      // Handle paste
      const pastedValue = inputValue.slice(0, length);
      const newValue = [...value];
      pastedValue.split('').forEach((char, i) => {
        if (index + i < length) {
          newValue[index + i] = char;
        }
      });
      onChange(newValue);

      // Focus next empty input or last input
      const nextIndex = Math.min(index + pastedValue.length, length - 1);
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
      return;
    }

    const newValue = [...value];
    newValue[index] = inputValue;
    onChange(newValue);

    // Auto-focus next input if value entered
    if (inputValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all inputs are filled
    const filledValue = [...newValue];
    if (filledValue.every((val) => val) && filledValue.length === length) {
      onComplete?.(filledValue.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  return (
    <div className="otp-input-container">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className={`otp-input ${value[index] ? 'filled' : ''}`}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={() => handleFocus(index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
