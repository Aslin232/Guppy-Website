import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    if (slides.length === 0) return;
    if (slides[current].type === "video") return;

    const firstVideoIndex = slides.findIndex((s) => s.type === "video");
    const lastAutoIndex =
      firstVideoIndex === -1 ? slides.length - 1 : firstVideoIndex - 1;

    if (current >= lastAutoIndex) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= lastAutoIndex) return prev;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [current, slides]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnd = () => {
      console.log("Video finished:", slides[current].src);
    };

    video.addEventListener("ended", onEnd);
    return () => video.removeEventListener("ended", onEnd);
  }, [current, slides]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (distance < -50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!guppy) return <p>Guppy not found</p>;

  const isOut = guppy.stock === false;

  return (
    <div className="guppy-detail">
      <h2>{guppy.name}</h2>

      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div key={slides[current].src}>
          {slides[current].type === "image" ? (
            <img className="carousel-media" src={slides[current].src} alt="" />
          ) : (
            <video
              className="carousel-media"
              ref={videoRef}
              key={slides[current].src}
              controls
            >
              <source src={slides[current].src} type="video/mp4" />
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

      <div className="des">
        <p>{guppy.description}</p>
        <p>Price: {guppy.price}</p>
        <p>Delivery: {guppy.delivery}</p>

        {isOut && (
          <p style={{ color: "red", fontWeight: "bold" }}>Out of Stock</p>
        )}
      </div>

      <div className="buttons">
        {isOut ? (
          <button style={{ background: "gray", opacity: 0.6 }}>
            WhatsApp (Out of Stock)
          </button>
        ) : (
          <a
            href={`https://wa.me/918438725637?text=Hello,%20I%20want%20to%20buy%20${guppy.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        )}

        {isOut ? (
          <button style={{ background: "gray", opacity: 0.6 }}>
            Instagram (Out of Stock)
          </button>
        ) : (
          <a
            href="https://www.instagram.com/aquavibeguppies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on Instagram
          </a>
        )}
      </div>
    </div>
  );
}
