import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Page(){
    const {slug} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:8000/api/posts/${slug}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[slug]);
    if(!post){
        return <h2>Loading ....</h2>;
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <button onClick={()=> navigate("/pages")}>Back to Posts</button>
        </div>
    );
}