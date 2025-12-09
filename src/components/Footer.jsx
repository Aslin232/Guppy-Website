import React from "react";


export default function Footer() {
  return (
    <footer className="foot">
      <p>This page is created to check stock of the guppies.</p>
      <div className="sp">
        <span>
          <a
            href={
              "https://wa.me/918438725637?text=Hello,%20I%20want%20to%20buy%20"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp what"></i>
          </a>
          <span> Whatsapp</span>
        </span>
        <span>
          {" "}
          <a
            href="https://www.instagram.com/aquavibeguppies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram insta"></i>
          </a>
          <span>Instagram</span>
        </span>

        <span>
          <a
            href="https://www.youtube.com/@AquaVibeGuppies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-youtube yout"></i>
          </a>
          <span>Youtube</span>
        </span>
      </div>
    </footer>
  );
}
