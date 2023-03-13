import React from "react";
import Footer from "../components/Footer";
import InputPair from "../components/InputPair";
import Header from "../components/Header";

function createVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main id="body" className="flex-grow m-3  mb-4">
        <div className="flex flex-col w-full max-w-md mx-auto mb-4">
          <h1 id="title">Titel:</h1>
          <input
            type="text"
            id="titleInput"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Titel"
          />
        </div>
        <InputPair />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default createVocabulary;
