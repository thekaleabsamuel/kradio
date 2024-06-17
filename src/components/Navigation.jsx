import React from 'react';

const Navigation = ({ mode, setMode }) => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">K Radio</div>
        <div>
          <button
            className={`px-4 py-2 rounded-md ${
              mode === 'library' ? 'bg-gray-700' : 'bg-gray-600'
            }`}
            onClick={() => setMode('library')}
          >
            Library
          </button>
          <button
            className={`px-4 py-2 rounded-md ml-4 ${
              mode === 'radio' ? 'bg-gray-700' : 'bg-gray-600'
            }`}
            onClick={() => setMode('radio')}
          >
            Radio
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;