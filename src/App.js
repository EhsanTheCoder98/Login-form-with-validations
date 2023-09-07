import React from "react";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import { Route, Routes , Navigate} from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signup"/>} />
      </Routes>
    </div>
  );
};

export default App;
