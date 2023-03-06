export interface IAuthForm {
    username: string;
    password: string;
}

export interface IVocabularySet {
    oldKey?: string;
    key?: string;
    title: string;
    creator: string;
    terms: string[];
    definitions: string[];
}