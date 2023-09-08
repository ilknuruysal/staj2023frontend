import axios from "axios";

const API_URL = "/api/orders"; // Replace with your API endpoint

export default class OrderService {
  static createOrder(orderData) {
    return axios.post(API_URL, orderData);
  }

  static getAllSelling() {
    return axios.get(API_URL);
  }
}
