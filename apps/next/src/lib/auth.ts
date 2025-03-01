import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name =
          session.user.name?.replace(/\s+/g, "").toLowerCase() || "unknown";
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user?.email ?? undefined },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name ?? "Unknown",
            email: user.email!,
            image: user.image,
            isPremium: false,
            isAdmin: false,
          },
        });
      }

      return true;
    },
  },
  events: {
    async signOut({ token, session }) {
      // The cookie will be cleared by the ContainerProvider when it detects
      // the status change to "unauthenticated"
      console.log("User signed out", token);
    },
  },
};
