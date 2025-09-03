import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API;

export const api = {
  async request(endpoint, method = 'GET', data = null) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = typeof window !== 'undefined' ? Cookies.get('token') : null;

    const headers = {
      'Content-Type': 'application/json',
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      method,
      headers,
      cache: 'no-store',
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, config);
      const result = await response.json();

      if (!response.ok || result.success === false) {
        const message =
          result?.message ||
          result?.error?.message ||
          'Something went wrong, please try again.';

        alert(message); // ⛔️ Show error alert
        throw new Error(message);
      }

      return result;
    } catch (error) {
      const message =
        error?.message ||
        error?.response?.data?.message ||
        'An unexpected error occurred.';
      alert(message); // ⛔️ Show catch error alert
      throw error; // Still throw it for additional app-level handling if needed
    }
  },

  get(endpoint) {
    return this.request(endpoint);
  },

  post(endpoint, data) {
    return this.request(endpoint, 'POST', data);
  },

  put(endpoint, data) {
    return this.request(endpoint, 'PUT', data);
  },

  delete(endpoint) {
    return this.request(endpoint, 'DELETE');
  },
};
