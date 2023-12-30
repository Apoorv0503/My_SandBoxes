import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

export default function VideoSearcher(props) {
  const [videosList, setVideosList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [debounceTime, setDebounceTime] = useState(0);

  const fetchVideosData = async (titleQuery) => {
    let url = "https://content-xflix-backend.azurewebsites.net/v1/videos";
    if (titleQuery !== "") {
      url = `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${titleQuery}`;
    }
    const res = await axios.get(url);
    console.log(res);
    const videos = res.data.videos;
    setVideosList(videos);
  };

  // useEffet will run when there is a chng in input box
  useEffect(() => {
    // debounce logic:
    if (debounceTime !== 0) {
      //agar debounce time 0 nai h to clear kro previous timout :
      clearTimeout(debounceTime);
    }

    //nd then set new timeout from this point:
    const newTimeOut = setTimeout(() => fetchVideosData(searchKey), 1000);
    setDebounceTime(newTimeOut);
  }, [searchKey]);

  //when there is a change in input box, run this fucntion
  const handleChange = (e) => {
    setSearchKey(e.target.value);
    console.log(searchKey);
  };
  return (
    <>
      <Box>
        <TextField
          size="small"
          type="text"
          name="search-box"
          placeholder="Search for video title"
          value={searchKey}
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const { id, previewImage, genre, title, releaseDate } = video;
          // we are writting return here bcz used {} for arrow function passed in map,
          //  if we have used () then no need to write return explicitly
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
