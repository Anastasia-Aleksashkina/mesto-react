import React from "react";

function PopupWithForm({ title, name, isOpen, onClose, children, buttonText }) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`popup_${name}`}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          id={`${name}_close`}
          type="button"
          onClick={onClose}
        ></button>
        <form className="popup__form" name={`${name}_form`} novalidate>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button
            className="popup__button popup__button_disabled"
            type="submit"
            disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
