"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
};

export default function ProblemTab({ params, searchParams }: Props) {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch("/test.md");
      const text = await response.text();
      setMarkdownContent(text);
    };

    fetchMarkdown();
  }, []);
  return (
    <div className="markdown-content p-4 text-white">
      <div>{searchParams.tab ?? "hello"}</div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
