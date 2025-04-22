import React from "react";

const FilterBar: React.FC = () => {
  return (
    <div className="filterbar">
      <div className="filters">
        <select className="dropdown">
          <option>Last 7 days</option>
        </select>
        <select className="dropdown">
          <option>15 Mar - 22 Mar</option>
        </select>
        <div className="filter-buttons">
          {["All", "Received", "Sent", "Convert"].map((label) => (
            <button key={label} className="filter-btn">
              {label}
            </button>
          ))}
        </div>
        <select className="dropdown">
          <option>Currency</option>
        </select>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
    </div>
  );
};

export default FilterBar;
