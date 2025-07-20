import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/main";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
