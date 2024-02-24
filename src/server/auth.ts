import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { kaeruService } from "~/services/kaeru";
// import { db } from "~/server/db";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

declare module "next-auth" {
  interface User {
    // role: UserRole;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      // role: UserRole;
    } & DefaultSession["user"] &
      User;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, user, token }) => ({
      ...session,
      user: {
        ...token,
        ...session.user,
        id: user?.id,
      },
    }),
    jwt: ({ token, user }) => {
      if (user) {
        // This is the first login, we need to save the tokens
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
  },
  // adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const auth = await kaeruService.post(
            "/api/token/",
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            { headers: { "Content-Type": "application/json" } },
          );
          if (!auth?.data) return null;

          const authData = {
            email: credentials?.email ?? "",
            accessToken: auth.data.access,
            refreshToken: auth.data.refresh,
          };

          return {
            id: "",
            ...authData,
          };
        } catch (error) {
          console.log({ error });
          return null;
        }
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
