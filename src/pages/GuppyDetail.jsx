import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added for smooth UI animations
import guppies from "../data/guppies";

export default function GuppyDetail() {
  const { id } = useParams();
  const guppy = guppies.find((g) => g.id === parseInt(id));

  const slides = useMemo(() => {
    return guppy
      ? [
          ...(guppy.images || []).map((img) => ({ type: "image", src: img })),
          ...(guppy.videos || []).map((vid) => ({ type: "video", src: vid })),
        ]
      : [];
  }, [guppy]);

  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-slide logic for images
  useEffect(() => {
    if (slides.length === 0 || slides[current].type === "video") return;

    const firstVideoIndex = slides.findIndex((s) => s.type === "video");
    const lastAutoIndex =
      firstVideoIndex === -1 ? slides.length - 1 : firstVideoIndex - 1;

    if (current >= lastAutoIndex) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= lastAutoIndex ? prev : prev + 1));
    }, 3000); // Increased to 3s for better readability

    return () => clearInterval(interval);
  }, [current, slides]);

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) setCurrent((prev) => (prev + 1) % slides.length);
    else if (distance < -50)
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!guppy)
    return (
      <p style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Guppy not found
      </p>
    );

  const isOut = guppy.stock === false;

  return (
    <motion.div
      className="guppy-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <Link
        to="/"
        style={{
          color: "var(--accent-blue)",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        ← Back to Gallery
      </Link>

      {/* Media Carousel */}
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div key={slides[current]?.src}>
          {slides[current]?.type === "image" ? (
            <img
              className="carousel-media"
              src={slides[current].src}
              alt={guppy.name}
            />
          ) : (
            <video
              className="carousel-media"
              ref={videoRef}
              key={slides[current]?.src}
              controls
              autoPlay
              muted
            >
              <source src={slides[current]?.src} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        className="des"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "20px 0 10px" }}>
          {guppy.name}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "var(--accent-blue)",
            }}
          >
            {guppy.price}
          </span>
          {isOut && <span className="badge-out">Out of Stock</span>}
        </div>

        <p
          style={{
            lineHeight: 1.8,
            color: "var(--text-dim)",
            fontSize: "1.1rem",
          }}
        >
          {guppy.description}
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <p style={{ margin: "5px 0" }}>
            <strong>🚚 Delivery:</strong> {guppy.delivery}
          </p>
          {guppy.requirements && (
            <p style={{ margin: "5px 0" }}>
              <strong>📝 Note:</strong> {guppy.requirements}
            </p>
          )}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="buttons">
        {!isOut ? (
          <>
            <a
              href={`https://wa.me/918438725637?text=Hello,%20I%20want%20to%20buy%20${guppy.name}`}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order via WhatsApp
            </a>
            <a
              href="https://www.instagram.com/aquavibeguppies/"
              className="btn-insta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on Instagram
            </a>
          </>
        ) : (
          <button
            disabled
            style={{
              background: "#333",
              color: "#777",
              cursor: "not-allowed",
              width: "100%",
              borderRadius: "12px",
              padding: "15px",
            }}
          >
            Currently Unavailable
          </button>
        )}
      </div>
    </motion.div>
  );
}
