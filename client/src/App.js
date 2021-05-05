import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Books />
      </div>
    </BrowserRouter>
  );
}

export default App;
