"use client";

import { useState } from "react";
import Youtube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleYoutubePlayer() {
    setIsOpen((prevState) => !prevState);
  }

  const options = {
    height: "300",
    width: "250",
  };

  function YoutubePlayer() {
    return (
      <div className="fixed right-2 bottom-2">
        <button
          onClick={handleYoutubePlayer}
          className="text-color-primary rounded float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  }

  function ButtonOpenTrailer() {
    return (
      <button
        onClick={handleYoutubePlayer}
        className="fixed bg-color-secondary text-color-primary rounded text-base font-semibold w-36 right-5 bottom-20 hover:bg-color-accent hover:text-color-secondary hover:scale-110 transition-all"
      >
        Watch Trailer
      </button>
    );
  }

  return isOpen ? <YoutubePlayer /> : <ButtonOpenTrailer />;
}
