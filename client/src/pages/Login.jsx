import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { loginUser } from "../services/authService";

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      const res = await loginUser({
        email,
        password
      });

      // store user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);

      alert("Login successful");

      // redirect to weather page
      navigate("/weather");

    }catch(err){

      console.log(err);

      alert("Login failed. Check email or password.");

    }

  };

  return(

    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

      </form>

    </div>

  );
}