import { useRef } from "react";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({
  isOpenBurger,
  setisOpenBurger,
  handleBurgerLogin,
  isAuth,
  logout,
}) => {
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
        ×
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
        {isAuth ? (
          <a className={s.menu_link} onClick={logout}>
            LogOut
          </a>
        ) : (
          <a className={s.menu_link} onClick={handleBurgerLogin}>
            Sign In
          </a>
        )}
      </div>
    </section>
  );
};

export default BurgerMenu;
