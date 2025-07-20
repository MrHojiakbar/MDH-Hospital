import React from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "./layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        
      </Route>
    </Routes>
  );
};

export default App;
