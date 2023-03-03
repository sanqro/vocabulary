import React from "react";
import wordInput from "./WordInput";

let id = 1;
function addWordButton() {
  const handleClick = () => {
    let element = document.getElementById("words")?.innerHTML;
    if (element !== undefined) {
      element += wordInput;
      document.getElementById("words")!.innerHTML = element;
      console.log(element);
      console.log(id);
      id++;
    }
    console.log("hi");
  };
  return (
    <button onClick={handleClick} className="py-2 px-4 border border-black rounded mx-10%">
      +
    </button>
  );
}

export default addWordButton;
