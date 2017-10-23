import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
        <p className="footer__text">
          <a href="https://github.com/MaxGenash" className="footer__link">Max Henash</a>, {' '}
          <a href="https://github.com/svoychik" className="footer__link">Sergiy Voychik</a>
          {' '}&copy; 2017
        </p>
    </footer>
  );
};