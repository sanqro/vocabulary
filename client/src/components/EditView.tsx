import React from "react";
import { IEditView } from "../interfaces/props";

function InputWord(props: IEditView) {
  return <div>{props.children}</div>;
}

export default InputWord;
