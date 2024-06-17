import React, { useState } from 'react';
import { albums } from './data';
import Player from './Player';

const Library = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {albums.map((album) => (
          <div key={album.id} className="bg-white shadow-md rounded-md p-4">
            <img
              src={album.coverUrl}
              alt={album.title}
              className="w-full mb-4"
            />
            <h3 className="text-lg font-bold">{album.title}</h3>
            <p className="text-gray-600">{album.artist}</p>
            <ul>
              {album.songs.map((song) => (
                <li
                  key={song.id}
                  className="text-gray-700 cursor-pointer"
                  onClick={() => handleSongClick(song)}
                >
                  {song.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8">
        {selectedSong && <Player song={selectedSong} />}
      </div>
    </div>
  );
};

export default Library;