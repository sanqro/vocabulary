import React, { useState, useEffect } from "react";
import { IVocabularySet } from "../interfaces/props";
import VocabSetCard from "./EditVocabularySetCard";
import EditVocabSetForm from "./EditVocabularySetForm";

const Edit: React.FC = () => {
  const [vocabList, setVocabList] = useState<IVocabularySet[]>([]);
  const [selectedSet, setSelectedSet] = useState<IVocabularySet | null>(null);

  useEffect(() => {
    const fetchVocabList = async () => {
      const user = sessionStorage.getItem("user");
      const response = await fetch(`https://api.sanqro.me/sets/getAll/${user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token") as string
        }
      });
      const data = await response.json();
      setVocabList(data.fetchedVocabularySets.items);
    };
    fetchVocabList();
  }, []);

  const handleEditClick = async (id: string) => {
    const response = await fetch(`https://api.sanqro.me/sets/getSet/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token") as string
      }
    });
    const data = await response.json();
    setSelectedSet(data.fetchedVocabularySet);
  };

  const handleDeleteClick = async (id: string) => {
    const response = await fetch(`https://api.sanqro.me/sets/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token") as string
      }
    });
    if (response.status === 200) {
      {
        const user = sessionStorage.getItem("user");
        const response = await fetch(`https://api.sanqro.me/sets/getAll/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("token") as string
          }
        });
        const data = await response.json();
        setVocabList(data.fetchedVocabularySets.items);
      }
    }
  };

  const handleSaveClick = async () => {
    if (!selectedSet) return;

    const oldKey = selectedSet.key;
    const { key, ...newSetData } = selectedSet;

    try {
      await fetch("https://api.sanqro.me/sets/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token") as string
        },
        body: JSON.stringify({ oldKey, ...newSetData })
      });

      setSelectedSet(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (type: keyof IVocabularySet, index: number, value: string) => {
    if (selectedSet) {
      const updatedSet: IVocabularySet = { ...selectedSet };
      (updatedSet[type] as string[])[index] = value;
      setSelectedSet(updatedSet);
    }
  };

  return (
    <div className="p-4">
      {vocabList.map((set) => (
        <VocabSetCard
          key={set.key}
          vocabSet={set}
          onEditClick={() => handleEditClick(set.key)}
          onDeleteClick={() => handleDeleteClick(set.key)}
        />
      ))}
      {selectedSet && (
        <EditVocabSetForm
          selectedSet={selectedSet}
          handleInputChange={handleInputChange}
          handleSaveClick={handleSaveClick}
          handleCancelClick={() => setSelectedSet(null)}
        />
      )}
    </div>
  );
};

export default Edit;
