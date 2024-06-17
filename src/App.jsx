import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Library from './components/Library';
import Radio from './components/Radio';
import Navigation from './components/Navigation';
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState('library');

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ChakraProvider>
      <div className="min-h-screen bg-gray-100">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div>
            <Navigation mode={mode} setMode={setMode} />
            {mode === 'library' ? <Library /> : <Radio />}
          </div>
        )}
      </div>
    </ChakraProvider>
  );
};

export default App;