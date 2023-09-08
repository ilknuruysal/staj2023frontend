import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { cartItems } from "./cartItems";

//there was img I deleted it
const CartItem = ({
  id,
  productName,
  productCategoryID,
  productPrice,
  productColor,
  productStock,
  bag,
}) => {
  const dispatch = useDispatch();
  const img = `../../${productName}.png`;
  return (
    <article className="cart-item">
      <img src={img} alt={"test"} />

      <div>
        <h4>{productName}</h4>
        <h4 className="item-price">${productPrice}</h4>
        <h4 className="item-color">{productColor}</h4>
        {/* <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button> */}
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            if (bag === productStock) {
              bag = productStock;
            } else {
              dispatch(increase({ id }));
            }
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{bag}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (bag === 0) {
              bag = 0;
            } else {
              dispatch(decrease({ id }));
            }
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
