import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import AddWordButton from "../components/AddWordButton";
import WordInput from "../components/WordInput";

function createVocabulary() {
  return (
    <>
      <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
        <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
        <LinkButton destination="/Create">Create Vocabulary</LinkButton>
        <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
      </header>
      <div id="body">
        <h1 id="title">Titel:</h1>
        <input type="text" id="titleInput" className="border border-black" />
        <div id="words"></div>
        <AddWordButton />
      </div>
      <footer className="fixed bottom-0 w-full bg-gray-200 py-4 p-0" id="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default createVocabulary;
