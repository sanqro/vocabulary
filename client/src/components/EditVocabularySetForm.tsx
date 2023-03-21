import React from "react";
import { IEditVocabularySetForm } from "../interfaces/props";
import OnClickButton from "./OnClickButton";

const EditVocabSetForm: React.FC<IEditVocabularySetForm> = ({
  selectedSet,
  handleInputChange,
  handleSaveClick,
  handleCancelClick
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold">{selectedSet.title}</h2>
      {selectedSet.terms.map((term, index) => (
        <div key={index} className="mb-2">
          <input
            className="mr-2"
            type="text"
            value={selectedSet.terms[index]}
            placeholder={term}
            onChange={(e) => handleInputChange("terms", index, e.target.value)}
          />
          <input
            type="text"
            value={selectedSet.definitions[index]}
            placeholder={selectedSet.definitions[index]}
            onChange={(e) => handleInputChange("definitions", index, e.target.value)}
          />
        </div>
      ))}
      <div>
        <OnClickButton
          onClick={() => handleSaveClick()}
          label="Save"
          className="py-2 px-4 mr-2 text-white rounded mx-10% bg-blue-500"
        />
        <OnClickButton
          onClick={() => handleCancelClick()}
          label="Cancel"
          className="py-2 px-4 text-white rounded mx-10% bg-red-500"
        />
      </div>
    </div>
  );
};

export default EditVocabSetForm;
