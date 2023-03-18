import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LearnView from "../components/LearnView";

function LearnVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main>
        <LearnView></LearnView>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default LearnVocabulary;
