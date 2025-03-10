import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footer_container}`}>
        <div className={s.footer_logo}>Light</div>

        <p className={s.footer_info}>© 2025 Light. All rights reserved.</p>

        <nav className={s.footer_nav}>
          <a href="#" className={s.footer_link}>
            Home
          </a>
          <a href="#" className={s.footer_link}>
            Pricing
          </a>
          <a href="#" className={s.footer_link}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
