import { useState } from "react";

import "./Header.scss";

export default function Header({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="header">
      <button onClick={handleToggleMenu} className="header__menu-btn">
        <i className="fas fa-bars"></i>
      </button>
      <a href="/" className="header__title">
        Management Dashboard
      </a>
      <a href="/login" className="header__logout-btn">
        {loggedIn ? "Logout" : "Login / Signup"}
      </a>
    </div>
  );
}
