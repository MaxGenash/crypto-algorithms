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
              <NavLink to={'/symmetric-key/des'}> DES </NavLink>
            </li>
            <li className="">
              <NavLink to={'/symmetric-key/aes'}> AES </NavLink>
            </li>
            <li className="">
              <NavLink to={'/symmetric-key/kalina'}> DSTU 7624:2014 (Kalina) </NavLink>
            </li>
          </ul>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Public-key ciphers</h5>
          <ul className="nav flex-column sidebar-submenu">
            <li className="">
              <NavLink to={'/public-key/rsa'}> RSA </NavLink>
            </li>
            <li className="">
              <NavLink to={'/public-key/elgamal'}> ElGamal </NavLink>
            </li>
          </ul>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Hashing</h5>
          <ul className="nav flex-column sidebar-submenu">
            <li className="">
              <NavLink to={'/hashing/md5'}> MD5 </NavLink>
            </li>
            <li className="">
              <NavLink to={'/hashing/sha3'}> SHA3 </NavLink>
            </li>
            <li className="">
              <NavLink to={'/hashing/kupyna'}> DSTU 7564:2014 (Kupyna) </NavLink>
            </li>
          </ul>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Digital signatures</h5>
          <ul className="nav flex-column sidebar-submenu">
            <li className="">
              <NavLink to={'/digital-signatures/rsa'}> RSA </NavLink>
            </li>
            <li className="">
              <NavLink to={'/digital-signatures/elgamal'}> ElGamal </NavLink>
            </li>
            <li className="">
              <NavLink to={'/digital-signatures/schnorr'}> Schnorr </NavLink>
            </li>
            <li className="">
              <NavLink to={'/digital-signatures/rabin'}> Rabin </NavLink>
            </li>
          </ul>
        </li>
        <li className="">
          <h5 className="sidebar-submenu-heading">Utilities</h5>
          <ul className="nav flex-column sidebar-submenu">
            <li className="">
              <NavLink to={'/utils/euclid_gcd'}>
                <abbr title="The greatest common divisor">GCD</abbr> Euclid's algorithm
                <br/>
                a & b
              </NavLink>
            </li>
            <li className="">
              <NavLink to={'/utils/extended_euclid_gcd'}>
                <abbr title="The greatest common divisor">GCD</abbr> Euclid's algorithm
                <br/>
                d = ax +  by
              </NavLink>
            </li>
            <li className="">
              <NavLink to={'/utils/extended_euclid_congruence_relation'}>
                Euclid's algorithm for
                <br/>
                ax ≡ b mod n
              </NavLink>
            </li>
            <li className="">
              <NavLink to={'/utils/sieve_of_eratosthenes'}> Sieve of Eratosthenes </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};