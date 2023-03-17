import React from "react";
import { IEditView } from "../interfaces/props";

function viewVocab(props: IEditView) {
  return <div>{props.children}</div>;
}

export default viewVocab;
