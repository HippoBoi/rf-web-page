import "./NavBar.css";

const NavBar = () => {
    const scrollTo = (position: number = 0) => {
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    };

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li onClick={() => {
                    scrollTo();
                    window.open("https://drive.google.com/file/d/1cSDwtxD3N1H52UGJQZNoXB8hFx3Q9X6t/view?usp=sharing")
                }}>
                <a>DOWNLOAD</a></li>
                <li onClick={() => scrollTo(1050)}><a>CHARACTERS</a></li>
                <li><a>ABOUT</a></li>
                <li><a>CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;