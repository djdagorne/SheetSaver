import React from "react";
import { Link } from "react-router-dom";

import AuthOptions from "./Auth/AuthOptions";

export default function Header() {
  return (
    <header id="header">
      <Link to="/" className="header__title">
        <span className="header__title--name">SheetSaver</span>
      </Link>
      <AuthOptions />
    </header>
  );
}
