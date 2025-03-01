import { atom } from "jotai";
export const userAtom = atom({
  name: "",
  loggedIn: false,
});

export const selectedLanguageAtom = atom("C");

export const currentProblemAtom = atom<string | null>(null);