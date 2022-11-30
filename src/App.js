import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

function App() {
  const [mode, setMode] = React.useEffect(false);
  function toggleMode() {
    setMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={mode} toggleDarkMode={toggleMode} />
      <Main arkMode={mode} />
    </div>
  );
}

export default App;
