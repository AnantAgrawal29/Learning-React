import { useState, useRef } from "react";

export default function SearchableList({ items, children, itemKeyFn }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).includes(searchTerm),
  );
  function handleChange(event) {
    if (lastChange.current) clearTimeout(lastChange.current);
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input
        type="search"
        ref={lastChange}
        onChange={handleChange}
        placeholder="Search"
      />
      <ul>
        {searchResults.map((item) => (
          <li className="place" key={itemKeyFn(item)}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
