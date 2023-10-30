// fetch API user
import axios from 'axios';

const API_USER_URL = "http://localhost:5000/api/auth/user";

// mengambil semua data user
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_USER_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil data user berdasarkan ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_USER_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// menghapus data user berdasarkan ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_USER_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
