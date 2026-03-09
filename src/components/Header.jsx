import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Effect to handle header background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: isScrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(27, 27, 27, 0.8)",
        padding: isScrolled ? "0.6rem 5%" : "1rem 5%",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo">
          <span className="logo-span">
            <motion.img
              src="/images/logo/logo.png"
              alt="img"
              className="logo-img"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
            <h2 className="logo-text">aquaVibe</h2>
          </span>
        </div>
      </Link>

      <AnimatePresence>
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="search-container"
          >
            <input
              type="text"
              placeholder="Search premium guppies..."
              onChange={(e) => onSearch(e.target.value)}
              className="search"
            />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
