import React, { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ProblemType } from "@/types/Problem";

type ProblemDescriptionProps = {
  markdown?: string;
  problemData: ProblemType;
};

export default async function ProblemDescription({
  markdown,
  problemData,
}: ProblemDescriptionProps) {
  if (!problemData) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-white text-3xl font-bold mb-2">
          {problemData.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm">
          <span
            className={`px-2 py-1 rounded ${getDifficultyColor(problemData.difficulty)}`}
          >
            {problemData.difficulty}
          </span>
          <span className="text-gray-400">Type: {problemData.type}</span>
          <span className="text-gray-400">
            Acceptance Rate: {problemData.acceptance_rate?.toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-2">Tags:</h2>
        <div className="flex flex-wrap gap-2">
          {problemData.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-2">Companies:</h2>
        <div className="flex flex-wrap gap-2">
          {problemData.companies?.map((company, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
      <div className="prose prose-invert max-w-none">
        {markdown ? (
          <Suspense fallback={<p>Loading...</p>}>
            <MDXRemote
              source={markdown}
              components={{
                h1: (props) => (
                  <h1
                    className="text-white text-3xl font-bold mb-4"
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className="text-white text-2xl font-bold mb-3"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="text-white text-xl font-bold mb-2"
                    {...props}
                  />
                ),
                p: (props) => <p className="text-white mb-4" {...props} />,
                ul: (props) => (
                  <ul
                    className="text-white list-disc list-inside mb-4"
                    {...props}
                  />
                ),
                ol: (props) => (
                  <ol
                    className="text-white list-decimal list-inside mb-4"
                    {...props}
                  />
                ),
                li: (props) => <li className="text-white mb-1" {...props} />,
                a: (props) => (
                  <a className="text-blue-400 hover:underline" {...props} />
                ),
                code: (props) => (
                  <code
                    className="text-white bg-gray-800 rounded px-1"
                    {...props}
                  />
                ),
                pre: (props) => (
                  <pre
                    className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"
                    {...props}
                  />
                ),
              }}
            />
          </Suspense>
        ) : (
          <p className="text-white">No description available.</p>
        )}
      </div>
    </div>
  );
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty?.toLowerCase()) {
    case "easy":
      return "bg-green-600 text-white";
    case "medium":
      return "bg-yellow-600 text-white";
    case "hard":
      return "bg-red-600 text-white";
    default:
      return "bg-gray-600 text-white";
  }
}
