import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function notFound() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main id="body" className="flex-grow m-3 mb-4">
        Page was not found
      </main>
      <Footer></Footer>
    </div>
  );
}

export default notFound;
