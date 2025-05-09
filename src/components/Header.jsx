import { Link } from "react-router-dom"
import { useState } from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} />
            </Link>
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className='nav-item' onClick={closeMenu}>Home</Link>
                <Link to="/about-us" className='nav-item' onClick={closeMenu}>About Us</Link>
                <Link to="/sell-your-home" className="nav-item" onClick={closeMenu}>Sell Your Home</Link>
                <Link to="/homes-for-sale" className='nav-item' onClick={closeMenu}>Homes For Sale</Link>
                <Link to="/work-with-us" className='nav-item' onClick={closeMenu}>Work With Us</Link>
                <Link to="/contractors" className='nav-item' onClick={closeMenu}>Contractors</Link>
                <Link to="/faqs" className='nav-item' onClick={closeMenu}>FAQs</Link>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    )
}

export default Header