import React from "react";
import { IEditView } from "../interfaces/props";

function editView(props: IEditView) {
  return <div>{props.children}</div>;
}

export default editView;
