import React from "react";
import InputField from "./components/inputField";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputField />
    </div>
  );
};

export default App;
