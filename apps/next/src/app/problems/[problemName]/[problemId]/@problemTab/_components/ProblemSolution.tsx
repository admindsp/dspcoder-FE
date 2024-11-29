"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@dspcoder/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@dspcoder/ui/components/ui/tabs";

const solutionProps = {
  title: "Two Sum",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  codeSnippets: [
    {
      language: "Python",
      code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, value in enumerate(nums):
            remaining = target - nums[i]
            
            if remaining in seen:
                return [i, seen[remaining]]
            
            seen[value] = i`,
    },
    {
      language: "JavaScript",
      code: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
};`,
    },
  ],
};

interface CodeSnippet {
  language: string;
  code: string;
}

interface ProblemSolutionProps {
  title: string;
  description: string;
  codeSnippets: CodeSnippet[];
}

export default function ProblemSolution() {
  const { title, description, codeSnippets = [] } = solutionProps;
  const [selectedLanguage, setSelectedLanguage] = useState(
    codeSnippets[0]?.language || ""
  );

  if (codeSnippets.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto border-none h-[calc(100vh-100px)] outline-none">
        <CardHeader>
          <CardTitle>{title || "No Title"}</CardTitle>
          <CardDescription>
            {description || "No description available."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>No code snippets available for this problem.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full rounded-none mx-auto bg-black text-white border-none outline-none h-[calc(100vh-100px)] overflow-auto">
      <CardHeader>
        <CardTitle>{title || "No Title"}</CardTitle>
        <CardDescription className="text-grayish_text">
          {description || "No description available."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={selectedLanguage}
          onValueChange={setSelectedLanguage}
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
            {codeSnippets?.map((snippet) => (
              <TabsTrigger key={snippet.language} value={snippet.language}>
                {snippet.language}
              </TabsTrigger>
            ))}
          </TabsList>
          {codeSnippets?.map((snippet) => (
            <TabsContent key={snippet.language} value={snippet.language}>
              <div className="relative">
                <SyntaxHighlighter
                  language={snippet.language.toLowerCase()}
                  style={dracula}
                >
                  {snippet.code}
                </SyntaxHighlighter>
                <Button
                  className="absolute top-2 right-2 text-black hover:scale-105 transition-all duration-300"
                  variant="outline"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(snippet.code)}
                >
                  Copy
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
