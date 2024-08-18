const axios = require("axios");

const apiKey = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = "http://localhost:1337/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

const getLatestProducts = async () => {
  try {
    const response = await axiosClient.get("/products");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getLatestProducts };