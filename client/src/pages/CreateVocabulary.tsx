import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import InputPair from "../components/InputPair";

function createVocabulary() {
  return (
    <>
      <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
        <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
        <LinkButton destination="/Create">Create Vocabulary</LinkButton>
        <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
        <LinkButton destination="/Learn">Learn Vocabulary</LinkButton>
      </header>
      <main id="body">
        <div className="flex flex-col w-full max-w-md mx-auto mb-4">
          <h1 id="title" className="">
            Titel:
          </h1>
          <input
            type="text"
            id="titleInput"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Titel"
          />
        </div>
        <InputPair />
      </main>
      <footer className="fixed bottom-0 w-full bg-gray-200 py-4 p-0" id="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default createVocabulary;
