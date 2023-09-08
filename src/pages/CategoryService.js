import axios from "axios";

const API_URL = "/api"; // Replace with your API endpoint

export default class CategoryService {
  static getAllCategories() {
    return axios.get(`${API_URL}/category`);
  }

  static createCategory(categoryData) {
    return axios.post(`${API_URL}/category`, categoryData);
  }

  static deleteCategoryById(categoryId) {
    return axios.delete(`${API_URL}/category/${categoryId}`);
  }
}
