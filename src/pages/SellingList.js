import React, { Component } from "react";
import OrderService from "./OrderService"; // Make sure to adjust the import path based on your project structure

export default class SellingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellingRecords: [],
      productID: "",
      numberOfProduct: "",
    };
  }

  componentDidMount() {
    this.fetchSellingRecords();
  }

  fetchSellingRecords() {
    OrderService.getAllSelling()
      .then((response) => {
        this.setState({
          sellingRecords: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching selling records:", error);
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleBuyClick = () => {
    const { productID, numberOfProduct } = this.state;
    const orderData = {
      productID: parseInt(productID),
      numberOfProduct: parseInt(numberOfProduct),
      // You might need to include other fields as needed
    };

    OrderService.createOrder(orderData)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log("Order created successfully:", response.data);
        // Clear the input fields
        this.setState({
          productID: "",
          numberOfProduct: "",
        });
        // Fetch updated selling records after creating an order
        this.fetchSellingRecords();
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error creating order:", error);
      });
  };

  render() {
    const { sellingRecords, productID, numberOfProduct } = this.state;

    return (
      <div>
        <h2>Selling Records</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer ID</th>
              <th>Number of Products</th>
            </tr>
          </thead>
          <tbody>
            {sellingRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.productID}</td>
                <td>{record.costumerID}</td>
                <td>{record.numberOfProduct}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Buy form */}
        <div>
          <h2>Buy Product</h2>
          <input
            type="number"
            name="productID"
            placeholder="Product ID"
            value={productID}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="numberOfProduct"
            placeholder="Number of Products"
            value={numberOfProduct}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBuyClick}>Buy</button>
        </div>
      </div>
    );
  }
}
