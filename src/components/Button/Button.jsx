import s from "./Button.module.scss";

const Button = ({ children, ...props }) => {
  return <button className={s.button} {...props}>{children}</button>;
};

export default Button;
