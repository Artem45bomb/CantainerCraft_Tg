import { signIn } from "next-auth/react";
import { NextAuthConfig } from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import axios from "axios";
import { checkExistUser } from "../api/service/user.service";

const authOptions: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: async ({
      user,
      account,
      profile,
      email,
      credentials,
    }): Promise<string | boolean> => {
      return true;
    },
  },
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
