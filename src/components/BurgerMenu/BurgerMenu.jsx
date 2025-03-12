import { useRef } from "react";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef();

  const clickOutSide = (e) => {
    if (e.target !== menuRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <section
      className={`${s.menu_wrapper} ${isOpen ? s.open : ""}`}
      onClick={clickOutSide}
    >
      <span className={s.menu_close_btn} onClick={() => setIsOpen(false)}>
        X
      </span>

      <div ref={menuRef} className={s.menu}>
        <a
          href="#home"
          className={s.menu_link}
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#comrany"
          className={s.menu_link}
          onClick={() => setIsOpen(false)}
        >
          Company
        </a>
        <a
          href="#headsets"
          className={s.menu_link}
          onClick={() => setIsOpen(false)}
        >
          Headsets
        </a>
        <a className={s.menu_link} onClick={() => setIsOpen(false)}>
          Sign Up
        </a>
      </div>
    </section>
  );
};

export default BurgerMenu;
