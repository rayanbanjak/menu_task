import { useState } from "react";
import MenuData from "../data/MenuData";
import MenuCard from "./MenuCard";

function FilterCategory({ addToCart, darkMode }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All", ...new Set(MenuData.map((item) => item.category)),
  ];

  const filteredMenu = MenuData.filter((item) => {
    return (
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <h2 className="text-center mb-4">Menu</h2>
      <div className="row mb-4">
        <div className="col-md-8">
          <input
            className={`form-control ${
              darkMode ? "bg-dark text-white border-light" : ""
            }`}
            value={search}
            placeholder="search in the menu..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className={`form-select ${
              darkMode ? "bg-dark text-white border-light" : ""
            }`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
          
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="row">
        {filteredMenu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            darkMode={darkMode}
          />
        ))}
      </div>
    </>
  );
}

export default FilterCategory;
