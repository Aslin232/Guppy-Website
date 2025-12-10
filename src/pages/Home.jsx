import React, { useState } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import GuppyCard from "../components/GuppyCard";
import guppies from "../data/guppies";
import Footer from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Dragon", "Albino", "Koi", "Dumbo ear"];

  // When typing in search → reset filter to All
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term !== "") {
      setSelectedFilter("All");
    }
  };

  // When clicking a filter → clear search
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setSearchTerm("");
  };

  const filteredGuppies = guppies.filter((g) => {
    const filterLower = selectedFilter.toLowerCase();
    const typeLower = g.type.toLowerCase();
    const nameLower = g.name.toLowerCase();
    const searchLower = searchTerm.toLowerCase();

    const matchFilter =
      filterLower === "all" || typeLower.includes(filterLower);

    const matchSearch = searchLower === "" || nameLower.includes(searchLower);

    return matchFilter && matchSearch;
  });

  return (
    <div>
      <Header onSearch={handleSearch} />

      <FilterBar
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={handleFilterClick}
      />

      <div className="guppy-grid">
        {filteredGuppies.length > 0
          ? filteredGuppies.map((g) => <GuppyCard key={g.id} guppy={g} />)
          : guppies
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((g) => <GuppyCard key={g.id} guppy={g} />)}
      </div>

      <Footer />
    </div>
  );
}
