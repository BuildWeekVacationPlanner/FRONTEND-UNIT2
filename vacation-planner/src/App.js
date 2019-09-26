import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <h1>Vacation Planner App</h1>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
