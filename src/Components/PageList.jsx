import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
export default function PageList(){
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:8000/api/posts`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[]);
    return(
        <div>
        <p>Page List Pages </p>
        {posts.map((post) => (
          <div key={post.title}>
            <h3>{post.title}</h3>
            <Link to={`/pages/${post.slug}`}>Read More</Link>
          </div>
        ))}
        <button onClick={()=>navigate("/pages/new")}>Create New Post</button>
        <button onClick={()=>navigate("/pages/delete")}>Delete a Post</button>
        </div>
    );
}