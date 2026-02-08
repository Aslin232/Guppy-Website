import React, { useState } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import GuppyCard from "../components/GuppyCard";
import guppies from "../data/guppies";
import Footer from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Stock");


  const filters = ["All", "Stock", "Dragon", "Albino", "Koi", "Dumbo ear"];

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term !== "") {
      setSelectedFilter("All");
    }
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setSearchTerm("");
  };

  const filteredGuppies = guppies.filter((g) => {
    const filterLower = selectedFilter.toLowerCase();
    const typeLower = g.type.toLowerCase();
    const nameLower = g.name.toLowerCase();
    const searchLower = searchTerm.toLowerCase();

 
    const matchStock =
      filterLower === "stock" ? g.stock === true : true;

    const matchFilter =
      filterLower === "all" ||
      filterLower === "stock" ||
      typeLower.includes(filterLower);


    const matchSearch =
      searchLower === "" || nameLower.includes(searchLower);

    return matchStock && matchFilter && matchSearch;
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
        {filteredGuppies.length > 0 ? (
          filteredGuppies.map((g) => (
            <GuppyCard key={g.id} guppy={g} />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" ,color:'white'}}>
            No fish available right now 🐟
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
