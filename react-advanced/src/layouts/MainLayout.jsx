import React from "react";
import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
    <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
      {/* <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#232323"}}> */}
        <div className="container">
          <Link className="navbar-brand" to="#">
            Recipes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookmarks">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default MainLayout;
