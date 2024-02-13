import { useState } from "react";

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
                <div className="burger-menu">
                    <div className={burgerClass} onClick={updateMenu}></div>
                    <div className={burgerClass} onClick={updateMenu}></div>
                    <div className={burgerClass} onClick={updateMenu}></div>
                </div>
            </nav>
            <div className={menuClass}></div>
        </div>
    );
}

export default Navbar;
