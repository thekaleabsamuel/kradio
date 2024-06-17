import React, { useState, useRef } from 'react';

const Player = ({ song }) => {
  // Add a check to ensure song is defined
  if (!song) {
    return null; // or return a loading spinner, or some placeholder content
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);


  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-gray-800 text-white rounded-full p-2 mr-4"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 9V15M14 9V15"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )}
        </button>
        <div className="text-gray-800 font-bold">{song.title}</div>
      </div>
      <div className="mt-4">
        <audio
          ref={audioRef}
          src={song.url}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className="flex items-center">
          <span className="text-sm mr-2">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={song.duration}
            value={currentTime}
            onChange={(e) => audioRef.current.currentTime = e.target.value}
            className="w-full"
          />
          <span className="text-sm ml-2">{formatTime(song.duration)}</span>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default Player;