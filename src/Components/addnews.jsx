import { useState } from "react";

const initialNews = {
  id: "",
  title: "",
  content: "",
  description: "",
};

export default function AddNews() {
  const [news, setNews] = useState(initialNews);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    fetch("http://localhost:8000/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(news),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Tạo bài viết thất bại");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Backend trả về:", data);
        setNews(initialNews);
        setMessage("Đã gửi bài viết về backend");
      })
      .catch((err) => setMessage(err.message))
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div>
      <h2>Thêm tin tức</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập id"
          value={news.id}
          onChange={(e) => setNews({ ...news, id: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Nhập tiêu đề"
          value={news.title}
          onChange={(e) => setNews({ ...news, title: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Nhập mô tả"
          value={news.description}
          onChange={(e) => setNews({ ...news, description: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Nhập nội dung"
          value={news.content}
          onChange={(e) => setNews({ ...news, content: e.target.value })}
        />
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang gửi..." : "Tạo bài viết"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
