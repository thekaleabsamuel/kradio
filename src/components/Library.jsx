import React from 'react';
import Player from './Player';

const Library = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Album covers and song lists go here */}
      </div>
      <div className="mt-8">
        <Player />
      </div>
    </div>
  );
};

export default Library;