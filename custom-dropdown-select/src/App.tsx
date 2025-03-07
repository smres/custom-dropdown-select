import React from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import { options } from "./constants/options.ts";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a Category</h2>
      <Dropdown options={options} placeholder="Choose a category" />
    </div>
  );
};

export default App;
