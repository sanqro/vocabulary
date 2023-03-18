/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { IFetchedVocabularySets } from "../interfaces/props";
import OnClickButton from "./OnClickButton";
import VocabularySetCard from "./VocabularySetCard";

const fornow = () => {
  console.log("want to view vocab");
};

const view: React.FC = () => {
  const [vocabList, setVocabList] = useState<IFetchedVocabularySets | null>(null);

  useEffect(() => {
    const fetchVocabList = async () => {
      const response = await fetch("http://localhost:3000/sets/getAll", {
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
            <div key={set.key}>
              <VocabularySetCard
                vocabularySet={set}
                onClick={() => {
                  fornow();
                }}
                label={`View ${set.title}`}
                className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
              ></VocabularySetCard>
            </div>
          );
        })}
    </div>
  );
};

export default view;
