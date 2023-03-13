/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IVocabularyInput } from "../interfaces/props";
import OnClickButton from "./OnClickButton";
import InputWord from "./InputWord";

function AddVocabulary(Vocabulary: IVocabularyInput) {
  fetch("http://localhost:3000/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("token") as string
    },
    body: JSON.stringify({
      title: (document.getElementById("titleInput") as HTMLInputElement).value,
      creator: sessionStorage.getItem("user"),
      terms: Vocabulary.term,
      definitions: Vocabulary.definition
    })
  }).then(() => {
    alert("Your Vocabulary has been added successfully");
  });
}

function checkWords(Vocabulary: IVocabularyInput) {
  let termboolean = false;
  let defenitionboolean = false;
  for (let i = 0; i < Vocabulary.term.length; i++) {
    if (Vocabulary.term[i] === "" || Vocabulary.term[i] === " ") {
      termboolean = true;
    }
  }
  for (let i = 0; i < Vocabulary.definition.length; i++) {
    if (Vocabulary.definition[i] === "" || Vocabulary.definition[i] === " ") {
      defenitionboolean = true;
    }
  }
  if (
    (document.getElementById("titleInput") as HTMLInputElement).value == "" ||
    (document.getElementById("titleInput") as HTMLInputElement).value == " "
  ) {
    alert("The vocabulary doesn't have a title");
  } else if (Vocabulary.term.length == 0) {
    alert("There are no words in the vocabulary");
  } else if (termboolean == true) {
    alert("There is a term which has nothing or a space in it");
  } else if (defenitionboolean == true) {
    alert("There is a definition which has nothing or a space in it");
  } else if (defenitionboolean == false && termboolean == false) {
    AddVocabulary(Vocabulary);
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
            placeholder="Begriff"
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
