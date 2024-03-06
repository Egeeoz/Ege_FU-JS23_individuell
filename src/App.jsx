import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes"; // Make sure to create this component
import Navigation from "./components/Navigation"; // Your dropdown nav component

function App() {
  return (
    <Router>
      <div>
        <Navigation />{" "}
        {/* This can be outside or inside AppRoutes, depending on your layout needs */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
