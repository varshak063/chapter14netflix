import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black  text-xl rounded-lg px-12 p-4 mr-4 hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white  text-xl rounded-lg px-12 p-4 mr-4 bg-opacity-50 hover:bg-opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
