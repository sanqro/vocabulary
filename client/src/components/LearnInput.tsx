import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILearnModeData } from "../interfaces/props";
import OnClickButton from "./OnClickButton";

const LearnInput: React.FC<ILearnModeData> = ({ terms, definitions, title, creator }) => {
  const nav = useNavigate();
  const [currentTermIndex, setCurrentTermIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [remainingWords, setRemainingWords] = useState<number>(terms.length);

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleValidateButtonClick = () => {
    const isCorrect = inputValue === definitions[currentTermIndex];

    setCurrentTermIndex(currentTermIndex + 1);
    setRemainingWords(remainingWords - 1);
    setInputValue("");

    if (currentTermIndex === terms.length - 1) {
      alert(
        isCorrect
          ? "Correct! Congratulations! You have finished the quiz!"
          : "Wrong! Congratulations! You have finished the quiz!"
      );
      nav("/");
    } else {
      alert(isCorrect ? "Correct!" : "Wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <h1 className="text-4xl font-bold mb-4">{`${title} by ${creator}`}</h1>
      <p className="text-lg mb-4">{terms[currentTermIndex]}</p>
      <span className="font-bold">Word {currentTermIndex + 1}:</span>
      <p className="text-lg mb-4">{remainingWords} words remaining</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValueChange}
        className="border border-gray-400 rounded-lg px-4 py-2 w-80 mb-4"
        placeholder="Enter the word"
      />
      <OnClickButton
        onClick={handleValidateButtonClick}
        label="Validate"
        className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
      />
    </div>
  );
};

export default LearnInput;
