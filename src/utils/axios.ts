import 'dotenv/config';
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
});

export const get = async (url: string, opt = {}) => {
  try {
    const response = await axiosInstance.get(url, opt);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const post = async (url: string, data: any, opt = {}) => {
  try {
    const response = await axiosInstance.post(url, data, opt);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const put = async (url: string, data: any, opt = {}) => {
  try {
    const response = await axiosInstance.put(url, data, opt);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const remove = async (url: string, opt = {}) => {
  try {
    const response = await axiosInstance.delete(url, opt);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};