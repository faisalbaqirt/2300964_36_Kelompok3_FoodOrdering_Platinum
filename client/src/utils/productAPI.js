//fetch API product
import axios from 'axios';

const API_PRODUCT_URL = "http://localhost:5000/api/products";

// mengambil semua product
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_PRODUCT_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil product berdasarkan ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_PRODUCT_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// membuat product
export const createProduct = async (productData) => {
    try {
      const response = await axios.post(`${API_PRODUCT_URL}`, productData);
      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error('Gagal membuat product.');
      }
    } catch (error) {
      throw error;
    }
  };
  
// mengupdate product berdasarkan ID
export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(`${API_PRODUCT_URL}/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// menghapus product berdasarkan ID
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_PRODUCT_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



