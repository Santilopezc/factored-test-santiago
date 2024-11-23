import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Replace with your backend URL if different

export const login = async (username: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Login failed";
  }
};

export const getAllEmployees = async () => {
    try {
      const response = await axios.get(`${API_URL}/employees`);
      return response.data;
    } catch (error) {
      throw error.response?.data?.detail || "Failed to fetch employees";
    }
  };

  export const getEmployee = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/employees/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to fetch employee details";
  }
};
