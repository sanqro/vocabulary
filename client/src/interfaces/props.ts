export interface ILinkButton {
  destination: string;
  children: string;
  className?: string;
}

export interface IVocabularySet {
  key: string;
  title: string;
  creator: string;
  terms: string[];
  definitions: string[];
}

export interface IFetchedVocabularySets {
  items: IVocabularySet[];
  count: number;
}

export interface ILearnModeData {
  terms: string[];
  definitions: string[];
  title: string;
  creator: string;
}

export interface IOnClickButton {
  onClick: () => void;
  label: string;
  className?: string;
}

export interface IVocabularyInput {
  definition: string[];
  term: string[];
}

export interface IInputWord {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IEditView {
  children: string;
}

export interface IVocabularySetCard {
  vocabularySet: IVocabularySet;
  onClick: () => void;
  label: string;
  className?: string;
}

export interface IEditVocbularySetCard {
  vocabSet: IVocabularySet;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export interface IEditVocabularySetForm {
  selectedSet: IVocabularySet;
  handleInputChange: (type: keyof IVocabularySet, index: number, value: string) => void;
  handleSaveClick: () => void;
  handleCancelClick: () => void;
}
