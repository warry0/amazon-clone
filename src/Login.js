import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { responsiveFontSizes } from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = e => {
      e.preventDefault();
      // firebase login
  }

  const register = e => {
    e.preventDefault();
    // firebase register
}

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Se Connecter</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Mot de passe</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={singIn} className="login__signInButton">
            S'identifier
          </button>
          <p>
            En vous connectant, vous acceptez les conditions d'utilisation du
            FAUX AMAZON-CLONE et Vente. Veuillez consulter notre condition de
            confidentialité, notre avis sur les cookies et notre avis relatif
            aux annonces basées sur les centres d'intérêt.
          </p>

          <button onClick={register} className="login__registerButton">
            Creer votre compte Amazon
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
