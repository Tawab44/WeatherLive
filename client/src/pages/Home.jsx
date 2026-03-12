import "../styles/Home.css"
import { Link } from "react-router-dom"

export default function Home(){
  return(

    <div className="home">

      <div className="hero">

        <h1>Weather Forecast Dashboard</h1>

        <p>
        Get real-time weather updates for any city in the world.
        Accurate forecasts, humidity, wind speed and temperature.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="btn">Get Started</Link>
          <Link to="/login" className="btn-outline">Login</Link>
        </div>

      </div>

      <div className="features">

        <div className="card">
          <h3>🌤 Real Time Weather</h3>
          <p>Check current weather conditions instantly.</p>
        </div>

        <div className="card">
          <h3>📅 Forecast</h3>
          <p>View multi-day weather forecasts.</p>
        </div>

        <div className="card">
          <h3>🌍 Any City</h3>
          <p>Search weather for cities worldwide.</p>
        </div>

      </div>

    </div>

  )
}