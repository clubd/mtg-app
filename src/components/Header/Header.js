import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <h1 className="header__heading">On The Stack</h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list-item"><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;