import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Home />
      
    </div>
  );
}

export default App;
