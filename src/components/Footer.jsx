import React from "react";
import { motion } from "framer-motion";
import '../App.css'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-span">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="logo-img-small"
            />
            <h3 className="logo-text">aquaVibe</h3>
          </div>
          <p className="footer-tagline">
            Dedicated to providing premium quality guppies and expert care
            advice for enthusiasts.
          </p>
        </div>

        <div className="footer-links">
          <h4>Connect with Us</h4>
          <div className="sp">
            <motion.a
              whileHover={{ y: -5, color: "#25d366" }}
              href="https://wa.me/918438725637"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -5, color: "#E1306C" }}
              href="https://www.instagram.com/aquavibeguppies/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -5, color: "#ff0000" }}
              href="https://www.youtube.com/@AquaVibeGuppies"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <i className="fa-brands fa-youtube"></i>
              <span>YouTube</span>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 AquaVibe Guppies. All rights reserved.</p>
      </div>
    </footer>
  );
}
