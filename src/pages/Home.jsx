import React, { useState } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import GuppyCard from "../components/GuppyCard";
import guppies from "../data/guppies";
import Footer from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Dragon", "Albino", "Koi","Dumbo ear"];

  const filteredGuppies = guppies.filter((g) => {
    const matchFilter = selectedFilter === "All" || g.type === selectedFilter;
    const matchSearch =
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchTerm === "";
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      
      <FilterBar
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
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
