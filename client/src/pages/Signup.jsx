import { useState } from "react";
import "../styles/Signup.css";
import { signupUser } from "../services/authService";

export default function Signup() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{

      const res = await signupUser({
        name,
        email,
        password
      });

      alert("Signup successful");

      console.log(res.data);

    }catch(err){
      alert("Signup failed");
    }

  }

  return(

    <div className="signup-container">

      <form className="signup-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Signup</button>

      </form>

    </div>

  )
}