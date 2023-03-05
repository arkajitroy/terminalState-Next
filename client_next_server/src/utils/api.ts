import axios from "axios";

const API_URL = process.env.API_BASE_URL;
const API_TOKEN = process.env.BACKEND_API_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// categories
export const fetchCategories = async () => api.get("/api/categories");

// articles
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);
