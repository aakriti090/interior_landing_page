import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return <Home />;
}

export default App;
