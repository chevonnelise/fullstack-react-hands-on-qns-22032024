import React, { useState } from 'react';

export default function AirQuality() {

  const [psi, setPsi] = useState(0);

  const getAirQualityText = () => {
    if (psi <= 50) {
      return "healthy";
    } else if (psi <= 150) {
      return "moderate";
    } else if (psi <= 200) {
      return "unhealthy";
    } else {
      return "hazardous";
    }
  }

  const getAirQualityColor = () => {
    switch (getAirQualityText()) {
      case "healthy":
        return "green";
      case "moderate":
        return "yellow";
      case "unhealthy":
        return "orange";
      case "hazardous":
        return "red";
      default:
        return "black";
    }
  }


  return (
    <React.Fragment>
      <div>
        <label>Enter the PSI:</label>
        <input type="text"
          value={psi}
          onChange={(e) => { setPsi(e.target.value) }}
        />
      </div>
      <h1>Air Quality</h1>
      <div id="air-quality"
        style={{ color: getAirQualityColor() }}
      >
        {getAirQualityText()}
      </div>
    </React.Fragment>
  )

}