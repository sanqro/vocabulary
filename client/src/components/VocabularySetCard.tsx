import React from "react";
import { classicNameResolver } from "typescript";
import { IVocabularySet, IVocabularySetCard } from "../interfaces/props";
import OnClickButton from "./OnClickButton";

const VocabularySetCard: React.FC<IVocabularySetCard> = ({
  vocabularySet,
  onClick,
  label,
  className
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold">{vocabularySet.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        Number of Words: {vocabularySet.terms.length || 0}
      </p>
      <p className="text-gray-600 text-sm mb-2">Creator: {vocabularySet.creator}</p>
      <OnClickButton onClick={onClick} label={label} className={className} />
    </div>
  );
};

export default VocabularySetCard;
