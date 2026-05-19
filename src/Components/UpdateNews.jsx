import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function UpdateNews() {
  const { id } = useParams();
  const [news, setNews] = useState({
    id: "",
    title: "",
    content: "",
    description: "",
  });
  function handleSubmit(e) {
    fetch(
      `http://localhost:8000/api/news/${id}/edit`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      },
      [],
    );
  }
  return (
    <div>
      <p>Update news</p>
      <input
        type="text"
        placeholder="nhap id"
        onChange={(e) => setNews({ ...news, id: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="nhap title"
        onChange={(e) => setNews({ ...news, title: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="nhap content "
        onChange={(e) => setNews({ ...news, content: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}> Update</button>
    </div>
  );
}
