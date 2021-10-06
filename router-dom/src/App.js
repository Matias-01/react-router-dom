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

function App() {
  return (
    <Router>
      <div className="container mt-5">
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
            Peliculas
          </Link>
          <Link to="/series" className="btn btn-dark">
            Series
          </Link>
          <Link to="/documentales" className="btn btn-dark">
            Documentales
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
        </Switch>
    </div>
  </Router>
  );
}

export default App;
