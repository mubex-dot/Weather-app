import { Container, Grid, Paper } from "@mui/material";
import "./currentWeather.css";
import sunny from "./icons/01d.png";
function currentWeather() {
  return (
    <Container maxWidth={"xs"} sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{
          width: 300,
          height: 200,
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <p className="city">Kaduna</p>
            <p className="weather-description">sunny</p>
            <img src={sunny} alt="weather" className="weather-icon" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default currentWeather;
