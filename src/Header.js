import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthenticaton = () => {
    if (auth) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Bonjour, {!user ? "Identifiez-vous" : "Bienvenue"}
            </span>
            <span className="header__optionLineTow">
              {user ? "Déconnexion" : "Connexion"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Retours</span>
          <span className="header__optionLineTow">et Commandes</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Tester</span>
          <span className="header__optionLineTow">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            <ShoppingCartIcon fontSize="large" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
