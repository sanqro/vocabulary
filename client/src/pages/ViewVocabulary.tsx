import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function viewVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main id="body" className="flex-grow m-3 mb-4">
        viewVocabulary
      </main>
      <Footer></Footer>
    </div>
  );
}

export default viewVocabulary;
