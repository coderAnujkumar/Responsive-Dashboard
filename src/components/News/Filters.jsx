import { useState } from "react";
import "./Filters.css";

const Filters = ({ onFilter }) => {
  const [author, setAuthor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");

  const handleFilter = () => {
    onFilter({ author, startDate, endDate, type });
  };

  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="news">News</option>
        <option value="blogs">Blogs</option>
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
