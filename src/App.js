import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/currentWeather";
import "./App.css";
import { Box, Container } from "@mui/material";

function App() {
  function handleThisChange(searchData) {
    console.log(searchData);
  }

  return (
    <Container maxWidth="xl">
      <Search onSearchChange={handleThisChange} />
      {/* Transfers onSearchChange to Search.jsx  */}
      <CurrentWeather />
    </Container>
  );
}

export default App;
