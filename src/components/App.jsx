import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <div className="page">
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardOpen={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"profile"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
        >
          <div className="popup__field">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Имя"
              className="popup__input popup__input-name"
              required
              minLength="2"
              maxLength="40"
            />
            <span id="name-error" className="popup__error-visible"></span>
          </div>
          <div className="popup__field">
            <input
              id="about"
              type="text"
              name="about"
              placeholder="Занятие"
              className="popup__input popup__input-about"
              required
              minLength="2"
              maxLength="200"
            />
            <span id="about-error" className="popup__error-visible"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm
          title={"Новое место"}
          name={"new-card"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Создать"}
        >
          <div className="popup__field">
            <input
              id="city"
              type="text"
              name="name"
              className="popup__input popup__input-city"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span id="city-error" className="popup__error-visible"></span>
          </div>
          <div className="popup__field">
            <input
              id="link"
              type="url"
              name="link"
              className="popup__input popup__input-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="link-error" className="popup__error-visible"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm
          title={"Обновить аватар"}
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
        >
          <div className="popup__field">
            <input
              id="avatar"
              type="url"
              name="avatar"
              className="popup__input popup__input-link"
              placeholder="Ссылка на аватар"
              required
            />
            <span id="avatar-error" className="popup__error-visible"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm
          title={"Вы уверены?"}
          name={"accept"}
          buttonText={"Да"}
        ></PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isImageOpen={isImageOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
