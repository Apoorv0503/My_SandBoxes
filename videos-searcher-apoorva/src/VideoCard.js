import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const VideoCard = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={props.imgLink}
        height="140"
        alt="Thumbnail"
      />

      <CardContent>
        <Typography color="text.secondary">{props.genre}</Typography>

        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>

        <Typography color="text.secondary">{props.releaseDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
