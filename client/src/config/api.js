export const BASE_URL = "https://tectora-pvt-lmt.onrender.com";

/**
 * Returns common headers for API requests including JSON content type
 * and JWT Authorization Bearer token if present in localStorage.
 */
export const getAuthHeaders = (extraHeaders = {}) => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extraHeaders
  };
};
