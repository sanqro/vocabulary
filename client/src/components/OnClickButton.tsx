import React from "react";
import { IOnClickButton } from "../interfaces/props";

function OnClickButton(props: IOnClickButton) {
  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default OnClickButton;
