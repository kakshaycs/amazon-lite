import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../store/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* logo in left with img*/}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search box */}

      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>

      {/* 3 links */}
      <div className="header_nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_option_one">Hello {user?.email}</span>
            <span className="header_option_two">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        {/* 2nd Link Return orders */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_one">Returns</span>
            <span className="header_option_two">& Orders</span>
          </div>
        </Link>
        {/* 3rd Link Amazon prime*/}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_one">Your</span>
            <span className="header_option_two">Prime</span>
          </div>
        </Link>
        {/* 4th Link Basket and its count */}
        <Link to="/checkout">
          <div className="header_option_basket">
            <ShoppingCartIcon />
            <span className="header_option_two basket_count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
