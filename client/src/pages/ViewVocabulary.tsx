import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import View from "../components/View";

function viewVocabulary() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main id="body" className="flex-grow m-3 mb-4">
        <View></View>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default viewVocabulary;
