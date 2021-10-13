import React from "react";
import "./navHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
function NavHeader() {
  return (
    <div className="navHeader">
      <img
        className="navHeaderLogo"
        src="https://cdn-icons-png.flaticon.com/512/458/458910.png"
        alt=""
      />
      <div className="navHeaderSearch">
        <input className="navHeaderSearchInput" type="text" />
        <SearchIcon className="navHeaderSearchIcon" />
      </div>
      <div className="navHeaderMenu">
        <div className="navHeaderOption">
          <span className="navHeaderOptionLineOne">Hello, </span>
          <span className="navHeaderOptionLineTwo">Sign In</span>
        </div>

        <div className="navHeaderOption">
          <span className="navHeaderOptionLineOne">Returns</span>
          <span className="navHeaderOptionLineTwo">& Orders</span>
        </div>

        <div className="navHeaderOption">
          <span className="navHeaderOptionLineOne">Your</span>
          <span className="navHeaderOptionLineTwo">Account</span>
        </div>
        <div className="navHeaderOptionBasket">
          <ShoppingBagIcon />
          <span className="navHeaderOptionLineTwo navHeaderBasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
