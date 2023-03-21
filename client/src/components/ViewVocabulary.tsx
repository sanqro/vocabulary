import React from "react";
import { IViewVocabularySet } from "../interfaces/props";
import LinkButton from "./LinkButton";

const ViewVocabulary: React.FC<IViewVocabularySet> = ({ title, creator, terms, definitions }) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600 text-sm mb-2">Number of Words: {terms.length || 0}</p>
      <p className="text-gray-600 text-sm mb-2">Creator: {creator}</p>
      {terms.map((term, index) => (
        <div key={index} className="mb-2 flex flex-row">
          <p className="mr-2 w-1/6">{terms[index]}</p>
          <p className="w-1/6">{definitions[index]}</p>
        </div>
      ))}
      <LinkButton className="py-2 px-4 text-white rounded mx-10% bg-blue-500" destination={"/"}>
        Go home
      </LinkButton>
    </div>
  );
};

export default ViewVocabulary;
