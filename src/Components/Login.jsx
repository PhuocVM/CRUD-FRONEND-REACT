import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ onLogin }) {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!creds.username || !creds.password) {
      alert("Vui lòng nhập username và password");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      });

      const data = await response.json();

      if (data.success) {
        alert("Đăng nhập thành công");
        onLogin(creds);
        navigate("/");
      } else {
        alert(data.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      alert("Lỗi kết nối: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>Login Pages</p>
      <input
        type="text"
        placeholder="Username"
        value={creds.username}
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={creds.password}
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />
      <br />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Đang đăng nhập..." : "Login"}
      </button>
    </div>
  );
}
