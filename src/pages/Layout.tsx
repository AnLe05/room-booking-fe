// src/Layout.js
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="room">Rooms</Link>
          </li>
          <li>
            <Link to="invitation">Invitation</Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
