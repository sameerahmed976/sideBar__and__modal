import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { isModal, closeModal } = useGlobalContext();

  return (
    <>
      <section className={`${isModal ? "modal show__modal" : "modal"}`}>
        <article className="modal__content">
          <span className="close close__modal" onClick={closeModal}>
            <FaTimes />
          </span>

          <h2 className="modal__text">Modal Content</h2>
        </article>
      </section>
    </>
  );
};

export default Modal;
