import React from "react";

function Card({ id, src, title, card, onCardOpen, likeCounter }) {
  return (
    <ul className="element" id={id}>
      <li>
        <button className="element__delete" type="button"></button>
      </li>
      <li>
        <img src={src} alt={title} className="element__image" onClick={() => {onCardOpen(card)}}/>
      </li>
      <li className="element__info">
        <h3 className="element__city">{title}</h3>
        <div className="element__like-container">
          <button type="button" className="element__like"></button>
          <p className="element__like-counter">{likeCounter}</p>
        </div>
      </li>
    </ul>
  );
}

export default Card;
