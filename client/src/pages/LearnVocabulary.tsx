import React from "react";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";

function startLearn() {
  console.log("pipi");
}

function LearnVocabulary() {
  return (
    <>
      <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
        <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
        <LinkButton destination="/Create">Create Vocabulary</LinkButton>
        <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
        <LinkButton destination="/Learn">Learn Vocabulary</LinkButton>
      </header>
      <main id="body">
        <button
          onClick={startLearn}
          className=" py-2 px-4 text-white rounded mx-10% bg-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Start
        </button>
      </main>
      <footer className="fixed bottom-0 w-full bg-gray-200 py-4 p-0" id="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default LearnVocabulary;
