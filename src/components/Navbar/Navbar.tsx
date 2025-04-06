import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
