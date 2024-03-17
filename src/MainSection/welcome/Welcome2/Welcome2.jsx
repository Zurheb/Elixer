import React, { useState } from "react";
import CardForWelcome2 from "./CardForWelcome2/CardForWelcome2";

const MyVideoComponent = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };

  const handleCloseButtonClick = () => {
    setShowVideo(false);
  };

  return (
    <div className="container mt-36">
      <div className="relative bg-cover bg-center rounded-lg w-full h-[700px] bg-[url('https://img.dasreda.ru/photo-data/f97d881c-89bc-4f34-84f8-9fdb8acd64ef/shutterstock_2094798988.jpg?q=80')] flex items-center justify-center">
        {showVideo ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-gray-700"
                onClick={handleCloseButtonClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jlWMTNZNOc0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : null}
        <button
          className="btn-elixir-play transform transition-transform duration-500 hover:scale-110 absolute"
          onClick={handlePlayButtonClick}
        >
          <svg
            className="w-64 h-24 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            ></path>
          </svg>
        </button>
      </div>
      
      <CardForWelcome2/>
    </div>
  );
};

export default MyVideoComponent;
