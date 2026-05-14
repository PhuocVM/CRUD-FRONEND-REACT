import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
export default function Login({onLogin}){
    const [creds, setCreds] = useState({username: "", password: ""});
    const navigate = useNavigate();
    return(
        <div>
        <p>Login Pages</p>
        <input
        type="text"
        placeholder="Username"
        value={creds.username}
        onChange={(e) => setCreds({...creds, username: e.target.value})}
        />
        <br />
        <input
        type="password"
        placeholder="Password"
        value={creds.password}
        onChange={(e) => setCreds({...creds, password: e.target.value})}
        />
        <br />
        <button onClick={() => {
            if(creds.username && creds.password){
                alert("Login successful");
                onLogin(creds);
                navigate("/");
            }
            else{
                alert("Please enter username and password");
            }
           
        }}>Login</button>   
        </div>
    );
}