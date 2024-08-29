import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { URL } from "../utils/constant";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  const fetchVideo = async () => {
    const raw = await fetch(URL);
    const data = await raw.json();
    setVideoList(data.items);
    console.log(data.items);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  // console.log(videoList?.items[0]);

  return videoList.length ? (
    <div className="h-full flex gap-y-4 justify-around flex-wrap overflow-y-auto ">
      {videoList.map((video) => (
        <VideoCard key={video.id} Info={video} />
      ))}
    </div>
  ) : (
    <h1>Lolz</h1>
  );
};

export default VideoContainer;
