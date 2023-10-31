//fetch API product
import axios from "axios";

let API_PRODUCT_URL;

if (process.env.NODE_ENV === "development") {
  // url local
  API_PRODUCT_URL = "http://localhost:5000/api/products";
} else {
  // url production
  API_PRODUCT_URL = process.env.REACT_APP_API_URL + "/api/products";
}

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
export const createProduct = async (formData) => {
  try {
    const response = await axios.post(API_PRODUCT_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengupdate product berdasarkan ID
export const updateProduct = async (productId, formData) => {
  try {
    const response = await axios.put(
      `${API_PRODUCT_URL}/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
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
