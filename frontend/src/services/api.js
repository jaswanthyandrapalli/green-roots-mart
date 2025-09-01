const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to create headers with auth token
const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Auth API calls
export const authAPI = {
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },
};

// Products API calls
export const productsAPI = {
  getAllProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    return response.json();
  },

  getProductById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },

  createProduct: async (productData) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });
    return response.json();
  },

  updateProduct: async (id, productData) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });
    return response.json();
  },

  deleteProduct: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return response.json();
  },
};

// Orders API calls
export const ordersAPI = {
  createOrder: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(orderData),
    });
    return response.json();
  },

  getUserOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders/myorders`, {
      headers: getAuthHeaders(),
    });
    return response.json();
  },

  getAllOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      headers: getAuthHeaders(),
    });
    return response.json();
  },
};

export default {
  auth: authAPI,
  products: productsAPI,
  orders: ordersAPI,
};
