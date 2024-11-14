import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function ProblemDescription() {
  try {
    const filePath = path.join(process.cwd(), "public", "test.md");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return (
      <div className="bg-darkish_100 h-full p-6 rounded-lg">
        <MDXRemote
          source={fileContents}
          components={{
            h1: (props) => (
              <h1 className="text-white text-3xl font-bold mb-4" {...props} />
            ),
            h2: (props) => (
              <h2 className="text-white text-2xl font-bold mb-3" {...props} />
            ),
            h3: (props) => (
              <h3 className="text-white text-xl font-bold mb-2" {...props} />
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
          }}
        />
      </div>
    );
  } catch (error) {
    console.error("Error reading markdown file:", error);
    notFound();
  }
}
