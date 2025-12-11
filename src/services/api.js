const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://new.mrjavab.com/api';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('auth_token');
};

// Set token in localStorage
const setToken = (token) => {
  localStorage.setItem('auth_token', token);
};

// Remove token from localStorage
const removeToken = () => {
  localStorage.removeItem('auth_token');
};

// Base fetch function with error handling
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  // Add body if provided
  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export { apiRequest, getToken, setToken, removeToken };
