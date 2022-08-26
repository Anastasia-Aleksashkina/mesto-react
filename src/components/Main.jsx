import React, { useState, useEffect } from "react";
import Card from "./Card";
import { api } from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardOpen }) {
  const [cards, setCards] = useState([]);
  const [userAvatar, serUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");

  function getCards() {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function getUserAbout() {
    api
      .getUserInfo()
      .then((res) => {
        serUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  useEffect(() => {
    getCards();
    getUserAbout();
  }, []);

  return (
    <>
      <section className="profile root__profile">
        <div className="profile__wrapper">
          <div className="profile__avatar">
            <img
              src={userAvatar}
              alt="Аватар"
              className="profile__avatar-img"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__user-name">{userName}</h1>
              <button
                type="button"
                className="profile__button-edit"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__user-about">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button-edd"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements root__elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            src={card.link}
            title={card.name}
            likeCounter={card.likes.length}
            onCardOpen={onCardOpen}
          />
        ))}
      </section>
    </>
  );
}

export default Main;
