import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Aditya's Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hobbies
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/hobbies">
                      All Hobbies
                    </Link>
                  </li>
                  <li><hr class="dropdown-divider"/></li>
                  <li>
                    <Link className="dropdown-item" to="/coding">
                      Coding
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/rubik">
                      Rubik's Cube
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link className="dropdown-item" to="/basketball">
                      Basketball
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
