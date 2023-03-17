<<<<<<< HEAD
export interface ILinkButton {
    destination: string;
    children: string;
}

export interface IVocabularySet {
    oldKey?: string;
    key?: string;
    title?: string;
    creator?: string;
    terms?: string[];
    definitions?: string[];
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
=======
export interface ILinkButton {
    destination: string;
    children: string;
    className?: string;
}

export interface IVocabularySet {
    oldKey?: string;
    key?: string;
    title?: string;
    creator?: string;
    terms?: string[];
    definitions?: string[];
}

export interface IFetchedVocabularySets {
    items: IVocabularySet[];
    count: number;
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
>>>>>>> 7d5766ffc61c570593efd72ca742c7b59dde0b2d
}