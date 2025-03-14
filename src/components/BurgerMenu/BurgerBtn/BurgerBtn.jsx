import s from "./BurgerBtn.module.scss";

const BurgerBtn = ({ isOpenBurger, setisOpenBurger }) => {
  return (
    <div
      className={`${s.burger_btn} ${isOpenBurger ? s.open : ""}`}
      onClick={() => setisOpenBurger(!isOpenBurger)}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
