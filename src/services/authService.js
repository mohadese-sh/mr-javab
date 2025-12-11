import { apiRequest, setToken, removeToken } from './api';

export const authService = {
  // Send OTP
  sendOTP: async (mobile, recaptchaToken = 'TEST') => {
    return apiRequest('/send-otp', {
      method: 'POST',
      body: {
        mobile,
        recaptcha_token: recaptchaToken,
      },
    });
  },

  // Verify OTP
  verifyOTP: async (mobile, otp, recaptchaToken = 'TEST') => {
    const response = await apiRequest('/verify-otp', {
      method: 'POST',
      body: {
        mobile,
        otp,
        recaptcha_token: recaptchaToken,
      },
    });

    // Store token if provided in response
    // The token might be in different fields depending on API response structure
    if (response.token) {
      setToken(response.token);
    } else if (response.access_token) {
      setToken(response.access_token);
    } else if (response.data?.token) {
      setToken(response.data.token);
    } else if (response.data?.access_token) {
      setToken(response.data.access_token);
    }

    return response;
  },

  // Get user profile
  getProfile: async () => {
    return apiRequest('/profile', {
      method: 'GET',
    });
  },

  // Logout
  logout: () => {
    removeToken();
  },
};
