import React from "react";
import LinkButton from "./LinkButton";

function header() {
  return (
    <header className="container flex justify-evenly items-center flex-shrink-0 bg-gray-200 p-4 padding">
      <LinkButton destination="/viewVocabulary" className="w-1/4 text-center">
        View Vocabulary
      </LinkButton>
      <LinkButton destination="/Create" className="w-1/4 text-center">
        Create Vocabulary
      </LinkButton>
      <LinkButton destination="/Edit" className="w-1/4 text-center">
        Edit Vocabulary
      </LinkButton>
      <LinkButton destination="/Learn" className="w-1/4 text-center">
        Learn Vocabulary
      </LinkButton>
    </header>
  );
}

export default header;
