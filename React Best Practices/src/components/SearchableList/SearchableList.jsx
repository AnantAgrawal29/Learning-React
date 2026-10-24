import { useState } from "react";

export default function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).includes(searchTerm),
  );
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="searchable-list">
      <input type="search" onChange={handleChange} placeholder="Search" />
      <ul>
        {searchResults.map((item) => (
          <li className="place" key={item.id}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
