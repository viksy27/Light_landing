import { useEffect, useState } from "react";
import Button from "../Button/Button";
import BurgerBtn from "../BurgerMenu/BurgerBtn/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Modal from "../Modal/Modal";

import userIcon from "../../assets/images/icons/user.svg";
import s from "./Header.module.scss";
import b from "../Button/Button.module.scss";

const Header = () => {
  const [isOpenBurger, setisOpenBurger] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isAuth"))) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [localStorage.getItem("isAuth")]);

  const login = (e) => {
    e.preventDefault();

    if (!username.length || !password.length) {
      return;
    }

    localStorage.setItem("isAuth", true);

    setUsername("");
    setPassword("");
    setIsOpenModal(false);
  };

  const logout = () => {
    localStorage.setItem("isAuth", false);
    setIsAuth(false);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setUsername("");
    setPassword("");
  };

  const handleBurgerLogin = () => {
    setisOpenBurger(false);
    setIsOpenModal(true);
  };

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
            handleBurgerLogin={handleBurgerLogin}
            isAuth={isAuth}
            logout={logout}
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

            {isAuth ? (
              <div className={s.usericon}>
                <img src={userIcon} alt="User Icon" />
                <span className={s.usericon_logout_btn} onClick={logout}>
                  LogOut
                </span>
              </div>
            ) : (
              <Button
                className={`${b.button} ${s.header_btn}`}
                onClick={() => setIsOpenModal(true)}
              >
                Sign In
              </Button>
            )}
          </div>
        </header>
      </div>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <form action="#" className={s.modal_input_wrapper} onSubmit={login}>
          <h2>SignIn</h2>
          <input
            className={s.modal_input}
            placeholder="Type UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className={s.modal_input}
            placeholder="Type password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button>Login</Button>
        </form>
      </Modal>
    </>
  );
};

export default Header;
