import {useState,useEffect} from "react";
export default function NewPost(){
    const [post,setPost] = useState({
        slug:"",
    });
    function submitChange(e){
        fetch(`http://localhost:8000/api/posts/${post.slug}`,{
            method:"DELETE",})
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return(
        <div>
        <p>Delete Post Pages </p>
        <input
        type="text"
        placeholder="nhap slug"
        value={post.slug}
        onChange={(e)=>setPost({...post,slug:e.target.value})}
        />
        <br />
        <button onClick={submitChange}>Submit</button>
        </div>
    );
}