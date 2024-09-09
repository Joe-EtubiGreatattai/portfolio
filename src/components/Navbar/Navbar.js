// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaLayerGroup, FaProjectDiagram, FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from '../ThemeToggle'; // Import the ThemeToggle component
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'About', path: '/about', icon: FaUser },
    { name: 'Stacks and technologies', path: '/stacks', icon: FaLayerGroup },
    { name: 'Projects', path: '/projects', icon: FaProjectDiagram },
  ];

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <button onClick={toggleMenu} className="menu-toggle">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
          <div className={`navbar-links ${isOpen ? 'hide' : ''}`}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="navbar-actions">
            <ThemeToggle /> {/* Include the ThemeToggle component */}
            <a
              href="https://wa.me/your_whatsapp_number"
              target="_blank"
              rel="noopener noreferrer"
              className="lets-talk-btn"
            >
              <FaWhatsapp />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
        {isOpen && (
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="https://wa.me/your_whatsapp_number"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-lets-talk-btn"
            >
              <FaWhatsapp />
              <span>Let's Talk</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
