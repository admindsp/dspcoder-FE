import { atom } from "jotai";
import { ContainerDetailsType } from "../../../../apps/next/src/types/Container";

export const containerDetailsAtom = atom<ContainerDetailsType | null>(null);
export const containerProblemPathAtom = atom<string | null>(null);
export const questionDetailsAtom = atom<any | null>(null);
