import React from "react";
import "./navHeader.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { auth } from "../firebase";

function NavHeader() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="navHeader">
      <Link to="/">
        <img
          className="navHeaderLogo"
          src="https://cdn-icons-png.flaticon.com/512/458/458910.png"
          alt=""
        />
      </Link>
      <div className="navHeaderSearch">
        <input className="navHeaderSearchInput" type="text" />
        <SearchIcon className="navHeaderSearchIcon" />
      </div>
      <div className="navHeaderMenu">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="navHeaderOption">
            <span className="navHeaderOptionLineOne">Hello, </span>
            <span className="navHeaderOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="navHeaderOption">
          <span className="navHeaderOptionLineOne">Returns</span>
          <span className="navHeaderOptionLineTwo">& Orders</span>
        </div>

        <div className="navHeaderOption">
          <span className="navHeaderOptionLineOne">Your</span>
          <span className="navHeaderOptionLineTwo">Account</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBagIcon />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavHeader;
