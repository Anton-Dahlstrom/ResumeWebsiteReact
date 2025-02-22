import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <NavLink to="/" className="logo">Home</NavLink>
                    <button className="mobile-menu-btn">☰ Menu</button>
                    <nav className="nav-links">
                        <NavLink to="/#/projects" className={({ isActive }) => isActive ? "active-page" : ""}>Projects</NavLink>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? "active-page" : ""}>Resume</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active-page" : ""}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-page" : ""}>Contact</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}