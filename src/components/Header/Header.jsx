import { useState, useEffect } from "react";
import Button from "../Button/Button";
import BurgerBtn from "../BurgerMenu/BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import s from "./Header.module.scss";
import b from "../Button/Button.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <header className={s.header}>
        <div>
          <a href="#" className={s.logo}>
            Light
          </a>
        </div>

        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <BurgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className={s.header_menu}>
          <a href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Features</a>
          <Button className={`${b.button} ${s.header_btn}`}>Sign Up</Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
