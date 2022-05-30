import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Zenki
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav" href="/slike">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav" href="/privacy">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
