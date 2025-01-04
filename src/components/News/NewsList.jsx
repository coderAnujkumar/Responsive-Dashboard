import "./NewsList.css";

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        articles.map((article) => (
          <div key={article.id} className="news-item">
            <h3>{article.title}</h3>
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Date:</strong> {new Date(article.date).toLocaleDateString()}</p>
            <p><strong>Type:</strong> {article.type}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
