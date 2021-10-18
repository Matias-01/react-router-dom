import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Series from "./components/Series";
import Inicio from "./components/Inicio";
import Peliculas from "./components/Peliculas";
import Categorias from "./components/Categorias";
import NSFW from "./components/NSFW";
import Documentales from "./components/Documentales";
import Logo from "./ThelmaLogo.png";
import Minimalista from "./components/Minimalista";

function App() {
  return (    
    <div className="fondo">
    <Router>
      <div className="container mt-5">
        <Link to="/">
           <img src={Logo} alt="Thelma" width="300" height="50"></img>
        </Link>
        <i className="bi bi-search"></i>
        <hr />
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/categorias" className="btn btn-dark">
            Categorias
          </Link>
          <Link to="/NSFW" className="btn btn-dark">
            NSFW
          </Link>
          <Link to="/peliculas" className="btn btn-dark">
            Películas
          </Link>
          <Link to="/series" className="btn btn-dark">
            Series
          </Link>
          <Link to="/documentales" className="btn btn-dark">
            Documentales
          </Link>
          <Link to="/m" className="btn btn-dark pull-right">
            Minimalista
          </Link>    
        </div>
        <hr />
        <Switch>
        <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/series">
            <Series/>
          </Route>
          <Route path="/peliculas">
            <Peliculas/>
          </Route>
          <Route path="/categorias">
            <Categorias/>
          </Route>
          <Route path="/NSFW">
            <NSFW/>
          </Route>
          <Route path="/documentales">
            <Documentales/>
          </Route>
          <Route path="/m">
            <Minimalista/>
          </Route>
        </Switch>
        {/* ¿Donde iria este script para que detecte la url
        <script>
        if (window.location.href.indexOf("mystring")
        </script> */}
    </div>
  </Router>
  </div>
  );
}

export default App;
