import React from "react";
import { Link, To } from "react-router-dom";
import { ILinkButton } from "../interfaces/props";

function linkButton(props: ILinkButton) {
  return (
    <Link to={props.destination as To}>
      <button className="py-2 px-4 border border-black rounded mx-10%">{props.children}</button>
    </Link>
  );
}

export default linkButton;
