/*
  Header.jsx
  ───────────
  Reusable header component for PAUSE web app.
  Displays app title, navigation icons, or menu.
*/

import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-3 px-4 sticky top-0 z-50">
      <h1 className="text-xl font-semibold tracking-tight text-gray-800">
        PAUSE
      </h1>
      <p className="text-sm text-gray-500">Secondhand events in Copenhagen</p>
    </header>
  );
}

export default Header;