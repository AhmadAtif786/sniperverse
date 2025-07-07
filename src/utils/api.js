const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options });
  }

  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  }

  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }

  async delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }
}

export const apiClient = new ApiClient();

export const authAPI = {
  login: (credentials) => apiClient.post('/api/auth/login', credentials),
  signup: (userData) => apiClient.post('/api/auth/signup', userData),
  logout: () => apiClient.post('/api/auth/logout'),
  verifyToken: () => apiClient.get('/api/auth/verify'),
  resetPassword: (email) => apiClient.post('/api/auth/reset-password', { email }),
};

export const userAPI = {
  getProfile: () => apiClient.get('/api/user/profile'),
  updateProfile: (data) => apiClient.put('/api/user/profile', data),
  getActivity: () => apiClient.get('/api/user/activity'),
}; 