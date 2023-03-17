import React, { useState, useEffect } from "react";
import { IFetchedVocabularySets } from "../interfaces/props";
import LearnInput from "./LearnInput";
import OnClickButton from "./OnClickButton";

const edit: React.FC = () => {
  const [vocabList, setVocablist] = useState<IFetchedVocabularySets | null>(null);
  const [learnMode, setlearnMode] = useState<boolean>(false);
  const [terms, setTerms] = useState<string[]>([]);
  const [definitions, setDefinitions] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [creator, setCreator] = useState<string>("");

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
      setVocablist(data.fetchedVocabularySets);
    };
    fetchVocabList();
  }, []);

  const startLearn = async (vocabularySetId: string) => {
    sessionStorage.setItem("vocabularySetId", vocabularySetId);
  
    const response = await fetch(`http://localhost:3000/sets/getSet/${vocabularySetId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token") as string
      }
    });
  
    const data = await response.json();
    setTerms(data.fetchedVocabularySet.terms);
    setDefinitions(data.fetchedVocabularySet.definitions);
    setTitle(data.fetchedVocabularySet.title);
    setCreator(data.fetchedVocabularySet.creator);
    sessionStorage.setItem("learnMode", "true");
  
    if (definitions== null || terms == null || title == null || creator == null) {
      alert("There was an internal error");
    }
    else {
      setlearnMode(true);
    }
  };
  
  return (
    <div className="p-4">
      {!learnMode && vocabList &&
        vocabList.items.map((set: any) => {
          return (
            <div key={set.key} className="border rounded-lg p-4 mb-4">
              <h2 className="text-2xl font-bold">{set.title}</h2>
              <p className="text-gray-600 text-sm mb-2">Number of Words: {set.terms.length}</p>
              <p className="text-gray-600 text-sm mb-2">Creator: {set.creator}</p>
              <OnClickButton
                onClick={() => {
                  startLearn(set.key);
                }}
                label="Learn this Set"
                className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
              />
            </div>
          );
        })}
      {learnMode && <LearnInput terms={terms} definitions={definitions} title={title} creator={creator} />}
    </div>
  );
};

export default edit;
