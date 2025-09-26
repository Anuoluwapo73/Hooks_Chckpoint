import React, { useState } from "react";

//Filter component
const Filter = ({ setSearch, setRate }) => {
  return (
    <div className="filter-stack">
      <input
        type="text"
        placeholder="Filter out your movie..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="number"
        min={1}
        max={10}
        placeholder="Filter out your movie rating..."
        onChange={(e) => setRate(e.target.value)}
      />
    </div>
  );
};

export default Filter;
