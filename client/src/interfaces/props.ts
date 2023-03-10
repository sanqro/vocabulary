export interface ILinkButton {
    destination: string;
    children: string;
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