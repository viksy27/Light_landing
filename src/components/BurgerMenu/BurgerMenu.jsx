import { useRef } from "react";
import closeIcon from "../../assets/images/icons/close.svg";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpenBurger, setisOpenBurger }) => {
  const menuRef = useRef();

  const clickOutSide = (e) => {
    if (e.target !== menuRef.current) {
      setisOpenBurger(false);
    }
  };

  return (
    <section
      className={`${s.menu_wrapper} ${isOpenBurger ? s.open : ""}`}
      onClick={clickOutSide}
    >
      <span className={s.menu_close_btn} onClick={() => setisOpenBurger(false)}>
        <img src={closeIcon} alt="Close icon" />
      </span>

      <div ref={menuRef} className={s.menu}>
        <a
          href="#home"
          className={s.menu_link}
          onClick={() => setisOpenBurger(false)}
        >
          Home
        </a>
        <a
          href="#comrany"
          className={s.menu_link}
          onClick={() => setisOpenBurger(false)}
        >
          Company
        </a>
        <a
          href="#headsets"
          className={s.menu_link}
          onClick={() => setisOpenBurger(false)}
        >
          Headsets
        </a>
        <a className={s.menu_link} onClick={() => setisOpenBurger(false)}>
          Sign Up
        </a>
      </div>
    </section>
  );
};

export default BurgerMenu;
