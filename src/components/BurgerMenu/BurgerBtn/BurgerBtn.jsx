import s from "./BurgerBtn.module.scss";

const BurgerBtn = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${s.burger_btn} ${isOpen ? s.open : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
