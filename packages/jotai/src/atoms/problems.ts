import { atom } from "jotai";
export const userAtom = atom({
  name: "",
  loggedIn: false,
});

export const selectedLanguageAtom = atom("c");

export const currentProblemAtom = atom<string | null>(null);
