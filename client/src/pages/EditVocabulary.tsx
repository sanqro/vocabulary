import React from "react";
import Edit from "../components/Edit";
import Footer from "../components/Footer";
import Header from "../components/Header";

function editVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main id="body" className="flex-grow m-3 mb-4">
        <Edit></Edit>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default editVocabulary;
