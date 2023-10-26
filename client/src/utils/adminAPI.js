// fetch API order
import axios from 'axios';

const API_ADMIN_URL = "http://localhost:5000/api/admin";

// mengambil data dashboard
export const getDashboardData = async () => {
  try {
    const response = await axios.get(`${API_ADMIN_URL}/dashboard`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil data order untuk chart
export const getOrdersChart = async (year, month) => {
  try {
    const response = await axios.get(`${API_ADMIN_URL}/orders-chart/${year}/${month}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil data sales untuk chart
export const getSalesChart = async (year, month) => {
  try {
    const response = await axios.get(`${API_ADMIN_URL}/sales-chart/${year}/${month}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};