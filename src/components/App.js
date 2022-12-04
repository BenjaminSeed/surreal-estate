import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import "../styles/navBar.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import PropertyCard from "./PropertyCard";

const App = () => {
  return (
    <div className="App">
      <header className="App-header" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/PropertyCard" element={<PropertyCard />} />
      </Routes>
    </div>
  );
};

export default App;
