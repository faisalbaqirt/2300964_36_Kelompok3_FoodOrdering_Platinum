// fetch API user
import axios from "axios";

const token = localStorage.getItem("token");
let API_USER_URL;

if (process.env.NODE_ENV === "development") {
  // url local
  API_USER_URL = "http://localhost:5000/api/auth";
} else {
  // url production
  API_USER_URL = process.env.REACT_APP_API_URL + "/api/auth";
}

//register
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_USER_URL}/register`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};

//login
export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_USER_URL}/login`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};

// mengambil data user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_USER_URL}/profile`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil semua data user
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_USER_URL}/user`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil data user berdasarkan ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_USER_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// register user oleh admin
export const createUserByAdmin = async (formData) => {
  try {
    const response = await axios.post(`${API_USER_URL}/user`, formData, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengupdate user berdasarkan ID oleh admin
export const updateUserByAdmin = async (userId, formData) => {
  try {
    const response = await axios.put(
      `${API_USER_URL}/user/${userId}`,
      formData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengupdate profile berdasarkan ID
export const editProfile = async (userId, formData) => {
  try {
    const response = await axios.put(
      `${API_USER_URL}/profile/${userId}`,
      formData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// menghapus data user berdasarkan ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_USER_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
