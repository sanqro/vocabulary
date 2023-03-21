import React, { useState, useEffect } from "react";
import { IFetchedVocabularySets } from "../interfaces/props";
import ViewVocabulary from "./ViewVocabulary";
import VocabularySetCard from "./VocabularySetCard";

const View: React.FC = () => {
  const [vocabList, setVocablist] = useState<IFetchedVocabularySets | null>(null);
  const [viewMode, setViewMode] = useState<boolean>(false);
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

  const startView = async (vocabularySetId: string) => {
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

    if (definitions == null || terms == null || title == null || creator == null) {
      alert("There was an internal error");
    } else {
      setViewMode(true);
    }
  };

  return (
    <div className="p-4">
      {!viewMode &&
        vocabList &&
        vocabList.items.map((set: any) => {
          return (
            <div key={set.key}>
              <VocabularySetCard
                vocabularySet={set}
                onClick={() => {
                  startView(set.key);
                }}
                label={`View ${set.title}`}
                className="py-2 px-4 text-white rounded mx-10% bg-blue-500"
              ></VocabularySetCard>
            </div>
          );
        })}
      {viewMode && (
        <ViewVocabulary title={title} creator={creator} terms={terms} definitions={definitions} />
      )}
    </div>
  );
};

export default View;
