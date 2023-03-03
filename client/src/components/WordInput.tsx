import React from "react";

let id = 0;
function wordInput() {
  id++;
  return (
    <>
      <div id={id.toString()}>
        <label>Term:</label>
        <br />
        <input type="text" id={`TermNr${id}`} className="border border-black" />
        <br />
        <label>Definition:</label>
        <br />
        <input type="text" id={`DefenitionNr${id}`} className="border border-black" />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default wordInput;
