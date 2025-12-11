import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '../services/authService';
import { getToken } from '../services/api';

// Query keys
export const authKeys = {
  all: ['auth'],
  profile: () => [...authKeys.all, 'profile'],
};

// Hook for sending OTP
export const useSendOTP = () => {
  return useMutation({
    mutationFn: ({ mobile, recaptchaToken = 'TEST' }) =>
      authService.sendOTP(mobile, recaptchaToken),
  });
};

// Hook for verifying OTP
export const useVerifyOTP = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ mobile, otp, recaptchaToken = 'TEST' }) =>
      authService.verifyOTP(mobile, otp, recaptchaToken),
    onSuccess: () => {
      // Invalidate and refetch profile after successful login
      queryClient.invalidateQueries({ queryKey: authKeys.profile() });
    },
  });
};

// Hook for getting user profile
export const useProfile = () => {
  const token = getToken();

  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: () => authService.getProfile(),
    enabled: !!token, // Only fetch if token exists
    retry: false,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};

// Hook for logout
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      authService.logout();
      return Promise.resolve();
    },
    onSuccess: () => {
      // Clear all queries on logout
      queryClient.clear();
    },
  });
};
