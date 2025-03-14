import { useState } from "react";
import Button from "../Button/Button";
import BurgerBtn from "../BurgerMenu/BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Modal from "../Modal/Modal";

import s from "./Header.module.scss";
import b from "../Button/Button.module.scss";

const Header = () => {
  const [isOpenBurger, setisOpenBurger] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="container">
        <header className={s.header}>
          <div>
            <a href="#" className={s.logo}>
              Light
            </a>
          </div>

          <BurgerMenu
            isOpenBurger={isOpenBurger}
            setisOpenBurger={setisOpenBurger}
          />
          <BurgerBtn
            isOpenBurger={isOpenBurger}
            setisOpenBurger={setisOpenBurger}
          />

          <div className={s.header_menu}>
            <a href="#home">Home</a>
            <a href="#comrany">Company</a>
            <a href="#headsets">Headsets</a>
            <Button
              className={`${b.button} ${s.header_btn}`}
              onClick={() => setIsOpenModal(true)}
            >
              Sign In
            </Button>
          </div>
        </header>
      </div>
      <Modal isOpen={isOpenModal} onClose={setIsOpenModal}>
        <form action="#">
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="password" />
          </div>
          <Button>Login</Button>
        </form>
      </Modal>
    </>
  );
};

export default Header;
