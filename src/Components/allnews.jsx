import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllNews() {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function loadNews() {
    setLoading(true);
    setError("");

    fetch("http://localhost:8000/api/news")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không tải được danh sách bài viết");
        }
        return res.json();
      })
      .then((data) => setNews(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadNews();
  }, []);

  const filteredNews = news.filter((p) => {
    const text = `${p.title || ""} ${p.content || ""}`.toLowerCase();
    return text.includes(keyword.toLowerCase());
  });

  return (
    <div>
      <h2>Tất cả tin tức</h2>
      <p>Tổng số bài viết: {news.length}</p>

      <input
        type="text"
        placeholder="Tìm bài viết"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="button" onClick={loadNews}>
        Tải lại
      </button>

      {loading && <p>Đang tải...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && filteredNews.length === 0 && (
        <p>Không có bài viết nào.</p>
      )}

      {filteredNews.map((p) => {
        return (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <Link to={`/news/${p.id}`}>Xem chi tiết</Link>
            <Link to={`/news/${p.id}/edit`}>Update news</Link>
          </div>
        );
      })}

      <Link to="/news/addnews">Thêm bài viết</Link>
    </div>
  );
}
