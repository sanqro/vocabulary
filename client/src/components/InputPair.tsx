import React, { useState } from "react";
import { IVocabularyInput } from "../interfaces/props";
import OnClickButton from "./OnClickButton";
import InputWord from "./InputWord";

function AddVocabulary(Vocabulary: IVocabularyInput) {
  console.log("add vocabset");
  /*   fetch("http://localhost:3000/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("jwt") as string
    },
    body: JSON.stringify({
      key: //
      title: //
      creator: //
      terms: Vocabulary.term,
      definitions: Vocabulary.definition
    })
  }); */
}

const InputPair = () => {
  const [pairs, setPairs] = useState<IVocabularyInput[]>([]);

  const handleAddPair = () => {
    setPairs([...pairs, { definition: [""], term: [""] }]);
  };

  const handleChange = (index: number, field: keyof IVocabularyInput, value: string) => {
    const newPairs = [...pairs];
    newPairs[index][field][0] = value;
    setPairs(newPairs);
  };

  const handleCreateVocabulary = () => {
    const Vocabulary: IVocabularyInput = {
      definition: pairs.map((pair) => pair.definition[0]),
      term: pairs.map((pair) => pair.term[0])
    };
    AddVocabulary(Vocabulary);
    console.log(Vocabulary);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {pairs.map((pair: any, index: number) => (
        <div className="flex space-x-4 mb-4" key={index}>
          <InputWord
            type="text"
            placeholder="Begriff"
            value={pair.definition[0]}
            onChange={(e) => handleChange(index, "definition", e.target.value)}
          />
          <InputWord
            type="text"
            placeholder="Definition"
            value={pair.definition[0]}
            onChange={(e) => handleChange(index, "definition", e.target.value)}
          />
        </div>
      ))}
      <OnClickButton
        onClick={handleAddPair}
        label="Wort hinzufügen"
        className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
      />
      <OnClickButton
        onClick={handleCreateVocabulary}
        label="Vokabularset erstellen"
        className="py-2 px-4 text-white rounded mx-10% bg-green-500 float-right"
      />
    </div>
  );
};

export default InputPair;
