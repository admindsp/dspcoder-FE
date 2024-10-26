import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
type Props = {};

const ProblemDescription = (props: Props) => {
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default ProblemDescription;
