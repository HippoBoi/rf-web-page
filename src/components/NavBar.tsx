import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a>DOWNLOAD</a></li>
                <li><a>CHARACTERS</a></li>
                <li><a>ABOUT</a></li>
                <li><a>CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;