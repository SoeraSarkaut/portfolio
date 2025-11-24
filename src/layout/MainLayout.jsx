import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-black w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
