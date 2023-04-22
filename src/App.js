import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/currentWeather";
import "./App.css";

function App() {
  function handleThisChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleThisChange} />{" "}
      {/* Transfers onSearchChange to Search.jsx  */}
      <CurrentWeather />
    </div>
  );
}

export default App;
