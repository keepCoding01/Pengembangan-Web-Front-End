import React from "react";
import { Outlet, Link } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#">
                <img src="https://www.catalog.style/static/media/catalog_logo.2f0babb5.svg" alt="" width="140" height="60" className="d-inline-block align-top" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/guest-book" className="nav-link">
                      GuestBook
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/faq" className="nav-link">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ask-me" className="nav-link">
                      AskMe
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
        <Outlet />
      </main>
    );
  }
}

export default Layout;
