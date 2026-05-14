import {useState,useEffect} from "react";
export default function NewPost(){
    const [newpost,setNewPost] = useState({
        slug:"",
        title:"",
        description:"",
});
    function handleSubmit(e){
        fetch("http://localhost:8000/api/posts",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newpost),
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
return(
    <div>
        <p>New Post Pages </p>
        <input
        type="text"
        placeholder="slug"
        value={newpost.slug}
        onChange={(e)=>setNewPost({...newpost,slug:e.target.value})}
        />
        <br />
        <input
        type="text"
        placeholder="title"
        value={newpost.title}
        onChange={(e)=>setNewPost({...newpost,title:e.target.value})}
        />
        <br />
        <input
        type="text"
        placeholder="description"
        value={newpost.description}
        onChange={(e)=>setNewPost({...newpost,description:e.target.value})}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
);
}