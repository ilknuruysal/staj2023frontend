import React, { Component } from "react";
import ProductService from "../pages/ProductService";

class CartItems extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const {} = this.props;

    console.log("Fetching all products");
    ProductService.getAllProducts()
      .then((response) => {
        console.log("Fetched products:", response.data);
        this.setState({ cartItems: response.data });
      })
      .catch((error) => console.error("Error getting products:", error));
  };

  render() {
    const { cartItems } = this.state;

    return <div></div>;
  }
}

export const cartItems = CartItems;

// productName: title
//       productCategoryID: "",
//       productPrice: price
//       productColor: ""
//       productStock: amount
// const cartItems = [
//   {
//     id: 'rec1JZlfCIBOPdcT2',
//     title: 'Samsung Galaxy S8',
//     price: '399.99',
//     img: 'https://images2.imgbox.com/c2/14/zedmXgs6_o.png',
//     amount: 1,
//   },
//   {
//     id: 'recB6qcHPxb62YJ75',
//     title: 'google pixel',
//     price: '499.99',
//     img: 'https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png',
//     amount: 1,
//   },
//   {
//     id: 'recdRxBsE14Rr2VuJ',
//     title: 'Xiaomi Redmi Note 2',
//     price: '699.99',
//     img: 'https://images2.imgbox.com/4f/3d/WN3GvciF_o.png',
//     amount: 1,
//   },
//   {
//     id: 'recwTo160XST3PIoW',
//     title: 'Samsung Galaxy S7',
//     price: '599.99 ',
//     img: 'https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png',
//     amount: 1,
//   },
// ];
// export default cartItems;
