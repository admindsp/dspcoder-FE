export type Question = {
  name: string;
  answer: string;
};

export type Subtopic = {
  name: string;
  questions: Question[];
};

export type Topic = {
  _id: string;
  name: string;
  subtopics: Subtopic[];
};
