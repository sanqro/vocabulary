import React from "react";
import LinkButton from "./LinkButton";

function header() {
  return (
    <header className="bg-gray-200 py-4 flex flex-row justify-center items-center">
      <LinkButton destination="/viewVocabulary">View Vocabulary</LinkButton>
      <LinkButton destination="/Create">Create Vocabulary</LinkButton>
      <LinkButton destination="/Edit">Edit Vocabulary</LinkButton>
      <LinkButton destination="/Learn">Learn Vocabulary</LinkButton>
    </header>
  );
}

export default header;
