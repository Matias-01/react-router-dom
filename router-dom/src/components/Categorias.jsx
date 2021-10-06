import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Terror from './Categorias/Terror';

function Categorias() {
    return (
        <Router>
            <div>
                <Link to="/categorias/terror" className="btn btn-dark">
                    Terror
                </Link>
            <Switch>
                <Route path="/terror">
                    <Terror/>
                </Route>
            </Switch>
            </div> 
        </Router>
    )
}

export default Categorias
