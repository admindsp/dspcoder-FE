import dotenv from "dotenv";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

dotenv.config({ path: "../../.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MONGO_URI: process.env.NEXT_PUBLIC_MONGO_URI,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    NEXT_PUBLIC_AUTH_SECRET: process.env.NEXT_PUBLIC_AUTH_SECRET,
    NEXT_PUBLIC_CODE_EXECUTION_API_URL:
      process.env.NEXT_PUBLIC_CODE_EXECUTION_API_URL,
  },
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
