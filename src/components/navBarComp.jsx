import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComComp from "./comComp";
import ErrorComp from "./errorComp";
import HomeComp from "./homeComp";
import NewUserComp from "./newUserComp";
import UsersComp from "./usersComp";

const NavBarComp = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          Usuarios
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/new-user">
                Nuevo Usuario <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users-list">
                Lista Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comments">
                Comentarios
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomeComp />
        </Route>
        <Route path="/home">
          <HomeComp />
        </Route>
        <Route path="/new-user">
          <NewUserComp />
        </Route>
        <Route path="/users-list">
          <UsersComp />
        </Route>
        <Route path="/comments">
          <ComComp />
        </Route>
        <Route path="*">
          <ErrorComp />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBarComp;
