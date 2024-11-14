"use client";

import { useState, useEffect } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";

// const components = {
//   h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
//   h2: (props) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
//   p: (props) => <p className="mb-2" {...props} />,
//   ul: (props) => <ul className="list-disc list-inside mb-2" {...props} />,
//   ol: (props) => <ol className="list-decimal list-inside mb-2" {...props} />,
//   a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
// };

export default function MDXRenderer() {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function loadMDXContent() {
      try {
        const filePath = path.join(process.cwd(), "test.md");
        const fileContent = await fs.readFile(filePath, "utf8");
        setContent(fileContent);
      } catch (error) {
        console.error("Error loading MDX content:", error);
        setContent("# Error\nFailed to load MDX content.");
      }
    }

    loadMDXContent();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <MDXRemote source={content} />
    </div>
  );
}
