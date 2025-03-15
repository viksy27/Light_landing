import { motion } from "framer-motion";
import closeIcon from "../../assets/images/icons/close.svg";
import s from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains("Modal_modal_wrapper__4MyAv")) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modal_wrapper} onClick={onWrapperClick}>
            <motion.div
              className={s.modal_content}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.3 }}
            >
              <img
                src={closeIcon}
                className={s.modal_close_btn}
                onClick={() => onClose(false)}
                alt="Close icon"
              />
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
