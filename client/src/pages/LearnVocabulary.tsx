import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function startLearn() {
  alert("You are learning now");
}

function LearnVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main id="body">
        <button
          onClick={startLearn}
          className=" py-2 px-4 text-white rounded mx-10% bg-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Start
        </button>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default LearnVocabulary;
