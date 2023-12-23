import { AuthRepository } from "@/repository";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const repository = AuthRepository.getInstance();
        console.log(credentials);
        const loginData = await repository.signIn({
          username: "newuser",
          password: "newpassword",
        });

        if (loginData) {
          return loginData;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, user, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
export { handler as GET, handler as POST };
