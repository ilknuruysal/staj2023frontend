import axios from "axios";

const API_URL = "/api/products"; // Replace with your API endpoint

export default class ProductService {
  static getAllProducts() {
    return axios.get(API_URL);
  }

  static getProductByCategory(categoryId) {
    return axios.get(`${API_URL}/byCategory/${categoryId}`);
  }

  static createProduct(productData) {
    return axios.post(API_URL, productData);
  }

  static getProductById(productId) {
    return axios.get(`${API_URL}/${productId}`);
  }

  static updateProductById(productId, updatedData) {
    return axios.put(`${API_URL}/${productId}`, updatedData);
  }

  static deleteProductById(productId) {
    return axios.delete(`${API_URL}/${productId}`);
  }
}
