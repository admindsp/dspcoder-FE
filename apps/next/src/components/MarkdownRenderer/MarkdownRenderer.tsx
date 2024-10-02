import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";

const MarkdownRenderer = () => {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch("/api/markdown"); // Assuming you have an API route
      const data = await response.json();
      setMdxSource(data.mdxSource);
    };

    fetchMarkdown();
  }, []);

  return <div>{mdxSource ? <MDXRemote {...mdxSource} /> : "Loading..."}</div>;
};
