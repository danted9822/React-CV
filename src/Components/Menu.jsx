import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);

  const _handleActiveSection = (e) => {
    window.location.hash = e.target.hash;
    setShow(!show);
  };

  return (
    <header className="l-header" id="header">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/#home" />} />
        </Routes>
        <nav className="nav bd-container">
          <span className="nav_logo">Menu</span>
          <div
            className={show ? "nav_menu show-menu" : "nav_menu"}
            id="nav-menu"
          >
            <ul className="nav_list">
              {menu.map(({ label, section, className }) => (
                <li className="nav_item" key={label}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav_link active-link" : "nav_link"
                    }
                    onClick={_handleActiveSection}
                    to={{ pathname: "/", hash: section }}
                  >
                    <i className={`bx ${className} nav_icon`} /> {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="nav_toggle"
            id="nav-toggle"
            onClick={() => setShow(!show)}
          >
            <i className="bx bx-grid-alt" />
          </div>
        </nav>
      </Router>
    </header>
  );
};
