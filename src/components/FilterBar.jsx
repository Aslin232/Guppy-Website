import React from "react";

export default function FilterBar({
  filters,
  selectedFilter,
  setSelectedFilter,
}) {
  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={selectedFilter === f ? "active" : ""}
          onClick={() => setSelectedFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
