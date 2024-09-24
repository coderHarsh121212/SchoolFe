import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollegeList from "./components/CollegeList";
import CollegeDetails from "./components/CollegeDetails";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Home Route - Shows list of all colleges */}
          <Route path="/" element={<CollegeList />} />

          <Route path="/colleges/:courseName" element={<CollegeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
