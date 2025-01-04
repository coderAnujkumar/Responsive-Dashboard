import { useState, useEffect } from "react";
import axios from "axios";

const useFetchNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            apiKey: "d382cd2607a943abafac500d4bdaef19", 
            country: "us",
          },
        });
        const formattedData = response.data.articles.map((article) => ({
          id: article.url, 
          title: article.title || "Untitled",
          author: article.author || "Unknown",
          date: article.publishedAt,
          type: "news", 
        }));
        setArticles(formattedData);
      } catch (err) {
        setError("Failed to fetch news articles. Please try again later.");
      }
    };

    fetchNews();
  }, []);

  return { articles, error };
};

export default useFetchNews;
