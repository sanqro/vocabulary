import React from "react";
import LinkButton from "./LinkButton";

function header() {
  return (
    <header className="flex justify-evenly items-center flex-shrink-0 bg-gray-200 p-4 padding">
      <LinkButton destination="/View" className="py-2 px-4 text-white rounded mx-10% bg-blue-500">
        View Vocabulary
      </LinkButton>
      <LinkButton destination="/Create" className="py-2 px-4 text-white rounded mx-10% bg-blue-500">
        Create Vocabulary
      </LinkButton>
      <LinkButton destination="/Edit" className="py-2 px-4 text-white rounded mx-10% bg-blue-500">
        Edit Vocabulary
      </LinkButton>
      <LinkButton destination="/Learn" className="py-2 px-4 text-white rounded mx-10% bg-blue-500">
        Learn Vocabulary
      </LinkButton>
    </header>
  );
}

export default header;
