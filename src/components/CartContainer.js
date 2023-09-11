import CartItem from "./CartItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../pages/ProductService";
import { updateCartItems, updateBag } from "../features/cart/cartSlice"; // Import the action
import { placeOrder } from "./Order";
import { useCategoryFilter } from "./CategoryFilterContext";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { total, amount, bag, cartItems } = useSelector((store) => store.cart);
  // const { CategoryFilter } = useCategoryFilter();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await ProductService.getAllProducts();
        const cartItems = response.data.map((item) => ({
          id: item.id,
          productName: item.productName,
          productCategoryID: item.productCategoryID,
          productPrice: item.productPrice,
          productColor: item.productColor,
          productStock: item.productStock,
          bag: 0,
        }));
        dispatch(updateCartItems(cartItems)); // Dispatch a Redux action with serializable data
        dispatch(updateBag(0));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [dispatch]);

  const { categoryFilter } = useCategoryFilter();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Ürünler</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Ürünler</h2>
      </header>
      <div>
        {/* {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })} */}
        {cartItems
          .filter(
            (item) =>
              categoryFilter === 0 || item.productCategoryID === categoryFilter
          )
          .map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Toplam <span>${total.toFixed(2)}</span>
          </h4>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
