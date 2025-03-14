import closeIcon from "../../assets/images/icons/close.svg";
import s from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains("Modal_modal_wrapper__4MyAv")) onClose();
  };
  console.log("test");

  return (
    <>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modal_wrapper} onClick={onWrapperClick}>
            <div className={s.modal_content}>
              <img
                src={closeIcon}
                className={s.modal_close_btn}
                onClick={() => onClose(false)}
                alt="Close icon"
              />
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
