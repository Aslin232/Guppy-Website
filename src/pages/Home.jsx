import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add this
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import GuppyCard from "../components/GuppyCard";
import guppies from "../data/guppies";
import Footer from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Stock", "Dragon", "Albino", "Koi", "Dumbo ear"];

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term !== "") setSelectedFilter("All");
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setSearchTerm("");
  };

  const filteredGuppies = guppies.filter((g) => {
    const filterLower = selectedFilter.toLowerCase();
    const matchStock = filterLower === "stock" ? g.stock === true : true;
    const matchFilter = filterLower === "all" || filterLower === "stock" || g.type.toLowerCase().includes(filterLower);
    const matchSearch = searchTerm === "" || g.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStock && matchFilter && matchSearch;
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Cards appear one by one
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <FilterBar filters={filters} selectedFilter={selectedFilter} setSelectedFilter={handleFilterClick} />

      <motion.div 
        className="guppy-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filteredGuppies.length > 0 ? (
            filteredGuppies.map((g) => (
              <motion.div
                key={g.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <GuppyCard guppy={g} />
              </motion.div>
            ))
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'white', gridColumn: '1/-1', textAlign: 'center' }}>
              No fish available right now 🐟
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </div>
  );
}
