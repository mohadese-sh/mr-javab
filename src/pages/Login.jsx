import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useVerifyOTP } from '../hooks/useAuth';
import Button from '../components/Button/Button';
import OTPInput from '../components/OTPInput/OTPInput';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { isSendingOTP } = useAuth();
  const verifyOTPMutation = useVerifyOTP();
  const [step, setStep] = useState(1); // 1: mobile input, 2: OTP input
  const [mobile, setMobile] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRef = useRef(null);

  const formatMobileForDisplay = (mobileNumber) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return mobileNumber
      .split('')
      .map((digit) => persianDigits[parseInt(digit)] || digit)
      .join('');
  };

  const validateMobile = (value) => {
    const digitsOnly = value.replace(/\D/g, '');

    if (digitsOnly.length === 0) {
      return { isValid: false, message: '' };
    }

    if (!digitsOnly.startsWith('09')) {
      return { isValid: false, message: 'شماره تماس باید با 09 شروع شود' };
    }

    if (digitsOnly.length < 11) {
      return { isValid: false, message: 'شماره تماس باید 11 رقم باشد' };
    }

    if (digitsOnly.length > 11) {
      return {
        isValid: false,
        message: 'شماره تماس نباید بیشتر از 11 رقم باشد',
      };
    }

    return { isValid: true, message: '' };
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    if (digitsOnly.length <= 11) {
      setMobile(digitsOnly);
      const validation = validateMobile(digitsOnly);
      setError(validation.message);
    }
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    const validation = validateMobile(mobile);
    if (!validation.isValid) {
      setError(validation.message || 'لطفا شماره تماس معتبر وارد کنید');
      return;
    }

    setError('');

    try {
      //   await sendOTP(mobile, 'TEST');
      // Move to OTP step on success
      setStep(2);
    } catch (err) {
      setError(err.message || 'خطا در ارسال کد تایید');
    }
  };

  const handleOTPChange = (newOtp) => {
    setOtp(newOtp);
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue.length !== 6) {
      return;
    }

    setError('');

    try {
      await verifyOTPMutation.mutateAsync({
        mobile,
        otp: otpValue,
        recaptchaToken: 'TEST',
      });
      // Navigate to home on success
      navigate('/');
    } catch (err) {
      setError(err.message || 'کد تایید اشتباه است');
      // Clear OTP on error
      setOtp(['', '', '', '', '', '']);
    }
  };

  const handleOTPComplete = async (otpValue) => {
    // Auto-submit when OTP is complete
    if (otpValue.length === 6) {
      const form = document.querySelector('.login-form');
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handleBackClick = () => {
    if (step === 2) {
      // Go back to mobile input step
      setStep(1);
      setError('');
    } else {
      // Go to home page
      navigate('/');
    }
  };

  const handleEditMobile = () => {
    setStep(1);
    setError('');
  };

  // Step 1: Mobile Input
  const renderMobileStep = () => (
    <>
      <div className="login-form-column">
        <img src="/images/mrgavab.png" alt="MRJAVAB" className="login-logo" />

        <h1 className="login-title">MRJAVAB</h1>

        <h2 className="login-subtitle">ورود | ثبت نام</h2>

        <p className="login-description">برای ادامه شماره تماس را وارد کنید</p>

        <form onSubmit={handleMobileSubmit} className="login-form">
          <div className="login-input-wrapper">
            <div
              className={`login-input-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}
            >
              <div className="login-input-icon">
                <img src="/icons/phone.svg" alt="Phone" />
              </div>

              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                className="login-input"
                placeholder="شماره تماس را وارد کنید"
                value={mobile}
                onChange={handleMobileChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={11}
              />

              {(isFocused || mobile) && (
                <label className="login-input-label">شماره تماس</label>
              )}
            </div>
            {error && <span className="login-input-error">{error}</span>}
          </div>

          <Button
            type="submit"
            disabled={
              isSendingOTP || !mobile || !!error || mobile.length !== 11
            }
            className="login-submit-button"
          >
            {isSendingOTP ? 'در حال ارسال...' : 'تایید و دریافت کد'}
          </Button>

          <p className="login-terms">
            ورود شما به معنای پذیرش{' '}
            <a href="/terms" className="login-terms-link">
              شرایط کانسپتو
            </a>{' '}
            و{' '}
            <a href="/privacy" className="login-terms-link">
              قوانین حریم خصوصی
            </a>{' '}
            است
          </p>
        </form>
      </div>
    </>
  );

  // Step 2: OTP Input
  const renderOTPStep = () => (
    <>
      <div className="login-form-column">
        <img src="/images/mrgavab.png" alt="MRJAVAB" className="login-logo" />

        <h1 className="login-title">MRJAVAB</h1>

        <h2 className="login-otp-subtitle">اعتبارسنجی</h2>

        <p className="login-otp-description">
          کد ارسال شده به {formatMobileForDisplay(mobile)} را وارد کنید
        </p>

        <p className="login-edit-mobile">
          شماره تماس اشتباه است؟{' '}
          <button
            type="button"
            onClick={handleEditMobile}
            className="login-edit-mobile-link"
          >
            اصلاح شماره تماس
          </button>
        </p>

        <form onSubmit={handleOTPSubmit} className="login-form">
          <div className="login-otp-wrapper">
            <OTPInput
              length={6}
              value={otp}
              onChange={handleOTPChange}
              onComplete={handleOTPComplete}
            />
            {error && <span className="login-input-error">{error}</span>}
          </div>

          <Button
            type="submit"
            disabled={otp.join('').length !== 6 || verifyOTPMutation.isPending}
            className="login-submit-button login-otp-button"
          >
            {verifyOTPMutation.isPending ? 'در حال تایید...' : 'تایید و ادامه'}
          </Button>
        </form>
      </div>
    </>
  );

  return (
    <div className="login-page">
      <div className="login-top-container">
        <button
          className="login-back-button"
          onClick={handleBackClick}
          aria-label={
            step === 1 ? 'بازگشت به صفحه اصلی' : 'بازگشت به مرحله قبل'
          }
        >
          <img src="/icons/arrow_forward.svg" alt="بازگشت" />
        </button>
      </div>
      <div className="login-container">
        {step === 1 ? renderMobileStep() : renderOTPStep()}

        <div className="login-image-column">
          <div className="login-image-placeholder">
            <img src="/images/4.png" alt="Login" className="login-side-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
