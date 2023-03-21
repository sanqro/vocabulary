import React from "react";
import { Link, To } from "react-router-dom";
import { ILinkButton } from "../interfaces/props";

function linkButton(props: ILinkButton) {
  return (
    <Link to={props.destination as To}>
      <button className={props.className}>{props.children}</button>
    </Link>
  );
}

export default linkButton;
