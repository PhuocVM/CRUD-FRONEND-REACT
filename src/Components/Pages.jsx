import { Outlet } from "react-router-dom";

export default function Page(){
    return(
        <div>
        <p>Page Pages </p>
        <Outlet/>
        </div>
    );
}