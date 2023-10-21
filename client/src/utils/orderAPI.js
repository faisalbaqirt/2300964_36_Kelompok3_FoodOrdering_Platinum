// fetch API order
import axios from 'axios';

const API_ORDER_URL = "http://localhost:5000/api/orders";

// mengambil semua order
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${API_ORDER_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil order berdasarkan ID
export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${API_ORDER_URL}/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// membuat order
export const createOrder = async (orderData) => {
    try {
      const response = await axios.post(`${API_ORDER_URL}`, orderData);
      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error('Gagal membuat pesanan.');
      }
    } catch (error) {
      throw error;
    }
  };
  
// mengupdate order berdasarkan ID
export const updateOrder = async (orderId, updatedData) => {
  try {
    const response = await axios.put(`${API_ORDER_URL}/${orderId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// update order status untuk admin
export const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await axios.put(`${API_ORDER_URL}/status/${orderId}`, newStatus);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// menghapus order berdasarkan ID
export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_ORDER_URL}/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
