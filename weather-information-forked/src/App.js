import "./styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import axios from "axios";
import CityCard from "./cityCard";

export default function App() {
  const [city, setCity] = useState({});
  const [timerID, setTimerID] = useState(null);

  const performSearch = async (text) => {
    try {
      let res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=4f1e0ba6b67b486a84892447230112&q=${text}&aqi=no`
      );
      console.log("res", res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const debounceSearch = (event) => {
    console.log(event.target.value);
    let timer = setTimeout(async () => {
      let cityData = await performSearch(event.target.value);
      setCity(cityData);
    }, 500);
    setTimerID(timer);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, [timerID]);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
        </AppBar>
      </Box>
      <TextField
        label="Enter Location"
        variant="outlined"
        sx={{ marginTop: "16px" }}
        onChange={(e) => {
          console.log(e.target.value);
          debounceSearch(e);
        }}
      />
      {city.length === 0 ? (
        <Typography>please enter the city name</Typography>
      ) : (
        <Box>
          <CityCard city={city} />
        </Box>
      )}
    </div>
  );
}
