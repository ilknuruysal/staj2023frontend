import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const bag = useSelector((store) => store.cart.bag);

  return (
    <nav>
      <div className="nav-center">
        <h3>STORE</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{bag}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
