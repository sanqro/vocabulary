import React from "react";
import { IInputWord } from "../interfaces/props";

function InputWord(props: IInputWord) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="w-1/2 border rounded-md px-3 py-2"
    />
  );
}

export default InputWord;
