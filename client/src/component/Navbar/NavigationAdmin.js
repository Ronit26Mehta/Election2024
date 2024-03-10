import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function NavbarAdmin() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="header">
      <NavLink to="/" className="header" style={{ display: 'flex', alignItems: 'center' }}>
      <img className="homei" src={process.env.PUBLIC_URL + '/images/goi2.png'} style={{ width: '50px', height: '86px' }} />
      <span style={{ marginLeft: '10px' }}>Government Of India</span>
      </NavLink>
     </div>
      <ul
        className="navbar-links"
        style={{ transform: open ? "translateX(0px)" : "" }}
      >
        <li>
          <NavLink to="/Verification" activeClassName="nav-active">
          <i className="fas fa-check-circle" />Verification
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddCandidate" activeClassName="nav-active">
          <i className="fas fa-user-friends" />
            Add Candidate
          </NavLink>
        </li>
        <li>
          <NavLink to="/Registration" activeClassName="nav-active">
          <i className="fas fa-user" /> Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/Voting" activeClassName="nav-active">
            <i className="fas fa-vote-yea" /> Voting
          </NavLink>
        </li>
        <li>
          <NavLink to="/Results" activeClassName="nav-active">
          <i className="fas fa-ribbon" /> Results
          </NavLink>
        </li>
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars burger-menu"></i>
    </nav>
  );
}
