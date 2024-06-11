import React from 'react';
import '../styling/footer.css'; // Make sure to create and link the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
        <ul className="footer-menu">
          <li className="footer-item">
            <a href="#home" className="footer-link">Home</a>
          </li>
          <li className="footer-item">
            <a href="#about" className="footer-link">About</a>
          </li>
          <li className="footer-item">
            <a href="#projects" className="footer-link">Projects</a>
          </li>
          <li className="footer-item">
            <a href="#contact" className="footer-link">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;