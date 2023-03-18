import React from "react";
import { IEditVocbularySetCard } from "../interfaces/props";
import OnClickButton from "./OnClickButton";

const VocabSetCard: React.FC<IEditVocbularySetCard> = ({
  vocabSet,
  onEditClick,
  onDeleteClick
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold">{vocabSet.title}</h2>
      <p className="text-gray-600 text-sm mb-2">Number of Words: {vocabSet.terms.length}</p>
      <p className="text-gray-600 text-sm mb-2">Creator: {vocabSet.creator}</p>
      <OnClickButton
        onClick={onEditClick}
        label="Edit"
        className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
      />
      <OnClickButton
        onClick={onDeleteClick}
        label="Delete"
        className="py-2 px-4 text-white rounded mx-10% bg-red-500"
      />
    </div>
  );
};

export default VocabSetCard;
