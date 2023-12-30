import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CityCard = (city) => {
  console.log("cityCard 5", city);

  return (
    <Card className="card">
      <Typography>
        ${city.location.name},{city.city.location.country}
      </Typography>
      <CardMedia
        component="img"
        alt="img"
        image={city.city.current.condition.icon}
      />
      <CardContent>
        <Typography>
          {city.city.current.temp_f}/{city.city.current.temp_c}
        </Typography>
        <Typography>{city.city.current.condition.text}</Typography>
        <Typography>{city.city.wind_kph}</Typography>
        <Typography>{city.city.humidity}</Typography>
        <Typography>{city.city.cloud}</Typography>
        <Typography>{city.city.current.last_updated}</Typography>
      </CardContent>
    </Card>
  );
};

export default CityCard;
