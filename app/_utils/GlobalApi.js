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
    const response = await axiosClient.get("/products?populate=*");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (id) => {
  try {
    const response = await axiosClient.get(`/products/${id}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductByCategory = async (category) => {
  try {
    const response = await axiosClient.get(
      `/products?populate=*&filters[category][$eq]=${category}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

//Add to cart collection
const addToCart = async (data) => {
  try {
    axiosClient.post("/carts", data);
  } catch (error) {
    console.log(error);
  }
};

//get user cart items
const getUserCartItems = async (email) => {
  try {
    const response = await axiosClient.get(
      "carts?populate[products][populate][0]=banner&filters[email][$eq]=" +
        email
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
export {
  getLatestProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  getUserCartItems,
};
