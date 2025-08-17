import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import './NavBar.css';
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                Simpler Technologies
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/signup" className="signup-button">Sign Up</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <X /> : <Menu />}
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="close-icon" onClick={toggleMenu}>
                        <X />
                    </div>
                    <div className="logo">
                        Simpler <br /> Technologies
                    </div>
                    <div className="mobile-links">
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" onClick={toggleMenu}>About</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        <Link to="/signup" className="signup-button" onClick={toggleMenu}>Sign Up</Link>
                    </div>
                </div>
            )}
        </nav>
    )
};