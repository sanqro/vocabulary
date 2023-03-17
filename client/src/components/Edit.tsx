/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { IFetchedVocabularySets } from "../interfaces/props";
import OnClickButton from "./OnClickButton";

const fornow = () => {
  console.log("want to edit vocab");
};

const edit: React.FC = () => {
  const [vocabList, setVocabList] = useState<IFetchedVocabularySets | null>(null);

  useEffect(() => {
    const fetchVocabList = async () => {
      const user = sessionStorage.getItem("user");
      const response = await fetch(`http://localhost:3000/sets/getAll/${user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token") as string
        }
      });
      const data = await response.json();
      setVocabList(data.fetchedVocabularySets);
    };
    fetchVocabList();
  }, []);

  return (
    <div className="p-4">
      {vocabList &&
        vocabList.items.map((set: any) => {
          return (
            <div key={set.key} className="border rounded-lg p-4 mb-4">
              <h2 className="text-2xl font-bold">{set.title}</h2>
              <p className="text-gray-600 text-sm mb-2">Number of Words: {set.terms.length}</p>
              <p className="text-gray-600 text-sm mb-2">Creator: {set.creator}</p>
              <OnClickButton
                onClick={fornow}
                label="Edit"
                className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
              />
            </div>
          );
        })}
    </div>
  );
};

export default edit;
