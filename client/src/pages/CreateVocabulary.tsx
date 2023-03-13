import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import InputPair from "../components/InputPair";

function createVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
        <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
        <LinkButton destination="/Create">Create Vocabulary</LinkButton>
        <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
        <LinkButton destination="/Learn">Learn Vocabulary</LinkButton>
      </header>
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
      <footer id="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default createVocabulary;
