import "./currentWeather.css";
import sunny from "./icons/01d.png";
function currentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Kaduna</p>
          <p className="weather-description">sunny</p>
        </div>
        <img src={sunny} alt="weather" className="weather-icon" />
      </div>
    </div>
  );
}

export default currentWeather;
