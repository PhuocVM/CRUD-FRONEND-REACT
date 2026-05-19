import { Outlet } from "react-router-dom";
export default function news() {
  return (
    <div>
      <p>News Pages</p>
      <Outlet />
    </div>
  );
}
