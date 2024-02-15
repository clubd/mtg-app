import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1 className="header_heading">On The Stack</h1>
            <nav className="header_nav">
                <ul className="header_list">
                    <li className="header_list-item"><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;