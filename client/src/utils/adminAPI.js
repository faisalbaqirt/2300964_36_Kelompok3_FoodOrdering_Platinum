// fetch API order
import axios from "axios";

const token = localStorage.getItem("token");
let API_ADMIN_URL;

if (process.env.NODE_ENV === "development") {
  // url local
  API_ADMIN_URL = "http://localhost:5000/api/admin";
} else {
  // url production
  API_ADMIN_URL = process.env.REACT_APP_API_URL + "/api/admin";
}

// mengambil data dashboard
export const getDashboardData = async () => {
  try {
    const response = await axios.get(`${API_ADMIN_URL}/dashboard`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil data order untuk chart
export const getOrdersChart = async (year, month) => {
  try {
    const response = await axios.get(
      `${API_ADMIN_URL}/orders-chart/${year}/${month}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// mengambil data sales untuk chart
export const getSalesChart = async (year, month) => {
  try {
    const response = await axios.get(
      `${API_ADMIN_URL}/sales-chart/${year}/${month}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
