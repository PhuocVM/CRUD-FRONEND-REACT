import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function NewDetail() {
  const [news, setNew] = useState([]);
  const { slug1 } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/news/${slug1}`)
      .then((res) => res.json())
      .then((data) => setNew(data));
  }, []);

  return (
    <div>
      <p> Bài tin tức </p>
      <h1>{news.id}</h1>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
}
