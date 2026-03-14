import { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home(){

  const [image,setImage] = useState(null);
  const [fileName,setFileName] = useState("");

  const handleImageChange = (e)=>{

    const file = e.target.files[0];

    if(file){

      setFileName(file.name);

      const imageUrl = URL.createObjectURL(file);

      setImage(imageUrl);

    }

  };

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


      {/* IMAGE UPLOAD TEST */}

      <div className="upload-section">

        <h2>Upload or Capture Image</h2>

        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
        />

        {fileName && (
          <p className="file-name">
            Selected: {fileName}
          </p>
        )}

        {image && (

          <div className="preview-container">

            <h3>Image Preview</h3>

            <img
              src={image}
              alt="preview"
              className="preview-image"
            />

          </div>

        )}

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