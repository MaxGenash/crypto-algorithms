import React from 'react';
import {NavLink} from "react-router-dom";
import './Sidebar.css';

export default function Footer() {
  return (
    <aside className="col-12 col-md-3 col-xl-2 sidebar">
      <ul className="nav flex-column">
        <li>
          <h5 className="sidebar-submenu-heading">Symmetric-key ciphers</h5>
          <ul className="nav flex-column sidebar-submenu">
            <li className="">
              <NavLink to={'/des'}> DES </NavLink>
            </li>
            <li className="">
              <NavLink to={'/aes'}> AES </NavLink>
            </li>
            <li className="">
              <NavLink to={'/kalina'}> ДСТУ 7624:2014 </NavLink>
            </li>
          </ul>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Public-key ciphers</h5>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Hashing</h5>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Digital signatures</h5>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Utilities</h5>
        </li>
      </ul>
    </aside>
  );
};