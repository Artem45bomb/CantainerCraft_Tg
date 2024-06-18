import { NextAuthConfig } from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

const authOptions: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {},
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authOptions);
