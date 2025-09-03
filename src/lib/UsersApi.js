import Cookies from 'js-cookie';

const API_BASE_URL = "https://api.nhdc.org.in/api";

export const UsersApi = {
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

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    }

    return response.json();
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
