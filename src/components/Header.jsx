import React from "react";
import Logo from "../images/logo.svg"

const Header = () => {
  return (
    <header className="header root__header">
      <img src={Logo} alt="Логотип Место" className="header__logo" />
    </header>
  );
};

export default Header;