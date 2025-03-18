import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isAuth"))) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [localStorage.getItem("isAuth")]);

  const login = (data) => {
    if (!data.name || !data.password) {
      return;
    }

    localStorage.setItem("isAuth", true);
    setIsOpenModal(false);
    reset();
  };

  const logout = () => {
    localStorage.setItem("isAuth", false);
    setIsAuth(false);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
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
        <form
          action="#"
          className={s.form_input_wrapper}
          onSubmit={handleSubmit(login)}
        >
          <h2>SignIn</h2>

          <label>
            UserName:
            <input
              {...register("name", {
                required: "Enter your username",
                minLength: {
                  value: 4,
                  message: "At least 4 characters",
                },
              })}
              className={s.form_input}
            />
            {errors?.name && (
              <p className={s.form_error}>
                {errors?.name?.message || "Error!"}
              </p>
            )}
          </label>

          <label>
            Password:
            <input
              {...register("password", {
                required: "Enter your password",
                minLength: {
                  value: 6,
                  message: "At least 6 characters",
                },
              })}
              className={s.form_input}
              type="password"
            />
            {errors?.password && (
              <p className={s.form_error}>
                {errors?.password?.message || "Error!"}
              </p>
            )}
          </label>
          <Button disabled={!isValid}>LogIn</Button>
        </form>
      </Modal>
    </>
  );
};

export default Header;
