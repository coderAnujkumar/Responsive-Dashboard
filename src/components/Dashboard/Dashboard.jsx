import { useState, useEffect } from "react";
import Filters from "../News/Filters";
import NewsList from "../News/NewsList";
import PayoutCalculator from "../Payout/PayoutCalculator";
import "./Dashboard.css";
import useFetchNews from "../../hooks/useFetchNews";

const Dashboard = () => {
  const { articles, error } = useFetchNews(); // Fetch articles using the hook
  const [filteredArticles, setFilteredArticles] = useState([]); // Store filtered articles
  const [searchKeyword, setSearchKeyword] = useState("");

  // Set the filteredArticles whenever articles are fetched
  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  const handleFilter = ({ author, startDate, endDate, type }) => {
    let filtered = articles;

    if (author) {
      filtered = filtered.filter((article) =>
        article.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    if (startDate) {
      filtered = filtered.filter((article) => new Date(article.date) >= new Date(startDate));
    }
    if (endDate) {
      filtered = filtered.filter((article) => new Date(article.date) <= new Date(endDate));
    }
    if (type) {
      filtered = filtered.filter((article) => article.type === type);
    }

    setFilteredArticles(filtered);
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    const searchedArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(keyword) ||
        article.author.toLowerCase().includes(keyword)
    );
    setFilteredArticles(searchedArticles);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* Global Search Bar */}
      <input
        type="text"
        placeholder="Search by keyword"
        value={searchKeyword}
        onChange={handleSearch}
        className="global-search"
      />

      {/* Filters */}
      <Filters onFilter={handleFilter} />

      {/* News List */}
      <div className="dashboard-section">
        <h2>News List</h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <NewsList articles={filteredArticles} />
        )}
      </div>

      {/* Payout Calculator */}
      <div className="dashboard-section">
        <h2>Payout Calculator</h2>
        <PayoutCalculator articles={filteredArticles} />
      </div>
    </div>
  );
};

export default Dashboard;
