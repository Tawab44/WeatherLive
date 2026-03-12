import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar(){

  const navigate = useNavigate();

  const [menuOpen,setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");

    navigate("/login");

  };

  return(

    <nav className="navbar">

      <div className="logo">🌦 HerbAi+ </div>

      {/* HAMBURGER BUTTON */}

      <div
        className="hamburger"
        onClick={()=>setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/">Home</Link>

        {token && <Link to="/weather">Weather</Link>}

        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/signup">Signup</Link>}

        {token && <span className="username">Hi, {name}</span>}

        {token && (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}

      </div>

    </nav>

  );
}