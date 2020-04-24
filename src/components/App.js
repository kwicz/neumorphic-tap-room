import React from 'react';
import '../App.css';
import Header from "./Header";
import KegControl from "./KegControl/KegControl"

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  )
}

export default App;
