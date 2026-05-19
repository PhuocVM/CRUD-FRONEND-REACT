import { Link, Outlet, useNavigate } from "react-router-dom";
export default function Layout({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    setUser(null);
    navigate("/");
  }
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/pages">Pages</Link> |
        <Link to="/about">About</Link> |<Link to="/news">News</Link> |
        {user ? (
          <>
            <Link to="stats">Stats</Link> |
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="login">Login</Link>
        )}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
