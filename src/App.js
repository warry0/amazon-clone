import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // ne s'exécutera qu'une seule fois lorsque le composant de l'application se charge

    auth.onAuthStateChanged((authUser) => {
      console.log("L'utilisateur est >>> ", authUser);

      if (authUser) {
        // l'utilisateur vient de se connecter / l'utilisateur s'est connecté

        dispatch({
          type: "Définir_l'utilisateur",
          user: authUser,
        });
      } else {
        // l'utilisateur est déconnecté
        dispatch({
          type: "Définir_l'utilisateur",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
