import React from "react";
import "./Home.css";
import coverVideos from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideos} autoPlay loop muted />
      <h1>Hi,</h1>
      <h1>I'm Andres Melo,</h1>
      <h1>Web Developer</h1>
      <p>
        Developer Full-Stack | React | Express | PostgreSQL | Redux | React
        Native
      </p>
    </div>
  );
};
export default Cover;
