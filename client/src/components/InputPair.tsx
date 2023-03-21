/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IVocabularyInput } from "../interfaces/props";
import OnClickButton from "./OnClickButton";
import InputWord from "./InputWord";

function addVocabulary(vocabulary: IVocabularyInput) {
  fetch("https://api.sanqro.me/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("token") as string
    },
    body: JSON.stringify({
      title: (document.getElementById("titleInput") as HTMLInputElement).value,
      creator: sessionStorage.getItem("user"),
      terms: vocabulary.term,
      definitions: vocabulary.definition
    })
  }).then(() => {
    alert("Your Vocabulary has been added successfully");
  });
}

function checkWords(vocabulary: IVocabularyInput) {
  let termBoolean = false;
  let definitionBoolean = false;
  for (let i = 0; i < vocabulary.term.length; i++) {
    if (vocabulary.term[i] === "" || vocabulary.term[i] === " ") {
      termBoolean = true;
    }
  }
  for (let i = 0; i < vocabulary.definition.length; i++) {
    if (vocabulary.definition[i] === "" || vocabulary.definition[i] === " ") {
      definitionBoolean = true;
    }
  }
  if (
    (document.getElementById("titleInput") as HTMLInputElement).value == "" ||
    (document.getElementById("titleInput") as HTMLInputElement).value == " "
  ) {
    alert("The vocabulary doesn't have a title");
  } else if (vocabulary.term.length == 0) {
    alert("There are no words in the vocabulary");
  } else if (termBoolean == true) {
    alert("There is a term which has nothing or a space in it");
  } else if (definitionBoolean == true) {
    alert("There is a definition which has nothing or a space in it");
  } else if (definitionBoolean == false && termBoolean == false) {
    addVocabulary(vocabulary);
  }
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
    checkWords(Vocabulary);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {pairs.map((pair: any, index: number) => (
        <div className="flex space-x-4 mb-4" key={index}>
          <InputWord
            type="text"
            placeholder="Term"
            value={pair.definition[0]}
            onChange={(e) => handleChange(index, "term", e.target.value)}
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
        label="Add pair of words"
        className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
      />
      <OnClickButton
        onClick={handleCreateVocabulary}
        label="Create vocabulary set"
        className="py-2 px-4 text-white rounded mx-10% bg-green-500 float-right"
      />
    </div>
  );
};

export default InputPair;
