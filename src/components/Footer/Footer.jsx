import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footer_container}`}>
        <div className={s.footer_logo}>Light</div>

        <p className={s.footer_info}>© 2025 Light. All rights reserved.</p>

        <nav className={s.footer_nav}>
          <a href="#home" className={s.footer_link}>
            Home
          </a>
          <a href="#comrany" className={s.footer_link}>
            Company
          </a>
          <a href="#headsets" className={s.footer_link}>
            Headsets
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
