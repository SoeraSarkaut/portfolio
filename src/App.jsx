import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <MainLayout>
      <Welcome />
    </MainLayout>
  );
}

export default App;