import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import NotMatch from "./Components/NotMatch";
import Layout from "./Components/Layout";
import Stats from "./Components/Stats";
import Login from "./Components/Login";
import Pages from "./Components/Pages";
import Page from "./Components/Page";
import PageList from "./Components/PageList";
import NewPost from "./Components/NewPost";
import DeletePost from "./Components/DeletePost";
export default function App(){
  const [user, setUser] = useState(null);
  return(
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotMatch />} />
          <Route path="stats" element={user ? <Stats /> : <Navigate to="/login" /> } />
          <Route path="login" element={<Login onLogin={setUser}/>} />
          <Route path="pages" element={<Pages />} >
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
            <Route path=":slug" element={<Page />} />
            <Route index element={<PageList />} />
            
          </Route>
        </Route>
      </Routes>    
      
  );
}