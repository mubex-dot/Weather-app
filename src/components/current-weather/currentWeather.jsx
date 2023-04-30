import { Container, Grid, Paper, Typography } from "@mui/material";
import "./currentWeather.css";
import sunny from "./icons/01d.png";
function currentWeather() {
  return (
    <Container maxWidth={"xs"} sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{
          width: 350,
          height: 150,
          backgroundColor: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={5} ml={2} mr={1}>
            <Typography component="p" variant="p">
              Kaduna
            </Typography>
            <Typography component="p" variant="caption">
              Kaduna
            </Typography>
            <Typography
              component="p"
              variant="h3"
              mt={2}
              sx={{ fontWeight: 600 }}
            >
              18°C
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: 80,
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src={sunny}
              alt="weather"
              className="weather-icon"
            />
            <Typography
              component="p"
              variant="caption"
              sx={{
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              Details <br /> Feels like 22°C <br /> Wind: 2m/s <br /> Humidity:
              15% <br /> Pressure: 15hPa
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default currentWeather;
