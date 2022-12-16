import React from "react";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">User Management System</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="create-user">Create User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
