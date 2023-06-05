import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayPet from "./components/DisplayPet";
import CreatePet from "./components/CreatePet";
import EditPet from "./components/EditPet";
import OnePet from "./components/OnePet";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <h1>PET SHELTER</h1>
        <Routes>
          <Route element={<DisplayPet />} path={"/"} />
          <Route element={<CreatePet />} path={"/pets/new"} />
          <Route element={<EditPet />} path={"/pets/:id/edit"} />
          <Route element={<OnePet />} path={"/pets/:id"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
