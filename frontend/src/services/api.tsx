import axios, { AxiosError } from "axios";

const API_URL = "http://127.0.0.1:8000"; // Replace with your backend URL if different

// Define interface for API error response
interface ApiError {
  detail: string;
}

export const login = async (username: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      throw (error.response.data as ApiError).detail || "Login failed";
    }
    throw "Login failed";
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/employees`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      throw (error.response.data as ApiError).detail || "Failed to fetch employees";
    }
    throw "Failed to fetch employees";
  }
};

export const getEmployee = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/employees/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      throw (error.response.data as ApiError).detail || "Failed to fetch employee details";
    }
    throw "Failed to fetch employee details";
  }
};