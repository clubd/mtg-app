import { useState } from "react";
import './Navbar.scss';

function Navbar() {
    const [burgerClass, setBurgerClass] = useState('burger_bar unclicked');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                </div>
            </nav>
            <div className={menuClass}></div>
        </div>
    );
}

export default Navbar;
