import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";

function Startpage() {
  return (
    <>
      <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
        <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
        <LinkButton destination="/Create">Create Vocabulary</LinkButton>
        <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
      </header>
      <main id="body" className="overflow-y-auto"></main>
      <footer className="fixed bottom-0 w-full bg-gray-200 py-4 p-0" id="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default Startpage;
