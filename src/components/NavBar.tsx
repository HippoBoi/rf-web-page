import "./NavBar.css";
import { useState } from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const scrollTo = (sectionId?: string) => {
        if (sectionId) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="Main">
            <div className="brand" onClick={() => {}} tabIndex={0} role="button" aria-label="Home">
                <img src={logo} alt="Random Fighters" className="brand-logo" />
            </div>

            <button
                className="hamburger"
                aria-controls="primary-navigation"
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle navigation">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            <ul id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
                <li>
                    <button className="nav-cta" onClick={() => { scrollTo(); window.open("https://drive.google.com/file/d/1cSDwtxD3N1H52UGJQZNoXB8hFx3Q9X6t/view?usp=sharing"); }}>Download</button>
                </li>
                <li>
                    <button className="nav-link" onClick={() => scrollTo('characters')}>Characters</button>
                </li>
                <li>
                    <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
                </li>
                <li>
                    <button className="nav-link" onClick={() => scrollTo('contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;