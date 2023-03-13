import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";

function Startpage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
        <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
        <LinkButton destination="/Create">Create Vocabulary</LinkButton>
        <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
        <LinkButton destination="/Learn">Learn Vocabulary</LinkButton>
      </header>
      <main id="body" className="flex-grow m-3 mb-4"></main>
      <footer id="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Startpage;
