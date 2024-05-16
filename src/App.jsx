import React, { useState } from 'react';
import './App.css';
import Para from './para'; // Assuming the correct import path for Para component

function App() {
  const [showPara, setShowPara] = useState(false);

  return (
    <>
      <button onClick={() => setShowPara(true)}>Click Here</button>
      {showPara && <Para />} {/* Render Para component only if showPara is true */}
    </>
  );
}

export default App;
