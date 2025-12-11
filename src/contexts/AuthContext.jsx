import { createContext, useContext, useEffect } from 'react';
import {
  useProfile,
  useVerifyOTP,
  useLogout,
  useSendOTP,
} from '../hooks/useAuth';
import { getToken } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const token = getToken();
  const {
    data: user,
    isLoading: profileLoading,
    error: profileError,
  } = useProfile();
  const verifyOTPMutation = useVerifyOTP();
  const logoutMutation = useLogout();
  const sendOTPMutation = useSendOTP();

  // Handle profile error - logout if unauthorized (401/403)
  useEffect(() => {
    if (profileError && token) {
      const status = profileError?.response?.status || profileError?.status;
      // If we have a token but profile fetch failed with auth error, logout
      if (status === 401 || status === 403) {
        logoutMutation.mutate();
      }
    }
  }, [profileError, token, logoutMutation]);

  const isAuthenticated = !!user && !!token;
  const loading = profileLoading && !!token; // Only show loading if we have a token

  const login = async (mobile, otp, recaptchaToken = 'TEST') => {
    return verifyOTPMutation.mutateAsync({ mobile, otp, recaptchaToken });
  };

  const logout = () => {
    logoutMutation.mutate();
  };

  const sendOTP = async (mobile, recaptchaToken = 'TEST') => {
    return sendOTPMutation.mutateAsync({ mobile, recaptchaToken });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        sendOTP,
        // Expose mutation states for components that need them
        isLoggingIn: verifyOTPMutation.isPending,
        isSendingOTP: sendOTPMutation.isPending,
        loginError: verifyOTPMutation.error,
        sendOTPError: sendOTPMutation.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
