import React from "react";
import { Link } from "react-router-dom";

export default function GuppyCard({ guppy }) {
  const isOut = guppy.stock === false;
  return (
    <>
      <Link to={`/guppy/${guppy.id}`} className="lnk">
        <div className="guppy-card">
          <img src={guppy.img} alt={guppy.name} />

          <h2 className="htag">{guppy.name}</h2>
          <p>Price: {guppy.price}</p>
          {isOut ? <p className="out-stock">Out of Stock</p> : null}
        </div>
      </Link>
    </>
  );
}
