import React from "react";

const VideoCard = ({ Info }) => {
  const { snippet, statistics } = Info;
  const { thumbnails, channelTitle } = snippet;
  const date = new Date();
  console.log(snippet.title);
  return (
    <div className=" w-96 flex flex-col justify-evenly gap-2 shadow-xl rounded-2xl">
      <img
        className="w-96 h-56 rounded-2xl"
        src={thumbnails?.maxres?.url}
        alt="banner"
      />
      <div className="p-2">
        <div>
          <p>{snippet?.title}</p>
        </div>
        <div>
          <p>{channelTitle}</p>
          <span>{statistics?.viewCount.slice(0, 3)}K</span>
          <span className="mx-2">
            {Number(snippet?.publishedAt.split("-")[0]) - date.getFullYear}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
