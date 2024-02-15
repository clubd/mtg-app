import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <Link className="footer__content-list" to="/history">History</Link>
                <Link className="footer__content-list" to="/rules">Rules</Link>
                <Link className="footer__content-list" to="/help">Help</Link>
            </div>
        </footer>
    );
}

export default Footer;