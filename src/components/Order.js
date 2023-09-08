import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import axios from "axios";

const Order = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  const placeOrder = () => {
    // Create an array of objects in the required format
    const soldProducts = cartItems.map((item) => ({
      product: {
        id: item.id,
      },
      numberOfProduct: item.bag,
    }));

    // Create the payload object
    const orderPayload = {
      soldProducts,
    };

    // Send the POST request to "api/orders"
    axios
      .post("/api/orders", orderPayload)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log("Order placed successfully:", response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error placing order:", error);
      });
  };

  return (
    <div>
      <div className="btn-container">
        <button className="button-43" onClick={placeOrder}>
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default Order;
