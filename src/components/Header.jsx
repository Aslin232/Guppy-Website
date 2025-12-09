import React from "react";

export default function Header({ onSearch }) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-span">
          <img src="/images/logo/logo.png" alt="img" className="logo-img" />
          <h2>aquaVibeGuppies</h2>
        </span>
      </div>
      <input
        type="text"
        placeholder="Search guppy..."
        onChange={(e) => onSearch(e.target.value)}
        className="search"
      />
    </header>
  );
}
