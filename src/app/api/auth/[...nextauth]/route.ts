// NextAuth App Router endpoint (/api/auth/*)
// - Uses Credentials provider
// - Reads secrets from .env
// - Verifies password with bcryptjs
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";




const { NEXTAUTH_SECRET, NEXTAUTH_URL } = process.env;
if (!NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET missing. Add it to .env.local");
}
if (!NEXTAUTH_URL) {
  console.warn("NEXTAUTH_URL not set. Add it to .env.local (http://localhost:3000 in dev).");
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      // Called on signIn("credentials", { email, password })
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim();
        const password = credentials?.password;
        if (!email || !password) return null;

        // 1) Find user
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        // 2) Verify password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;

        // 3) Minimal user returned -> goes into JWT callback as `user`
        return { id: user.id, name: user.name ?? null, email: user.email };
      },
    }),
  ],
  pages: { signIn: "/signin" }, // Custom sign-in page
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id; // put id on token
      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.id) (session.user as any).id = token.id as string;
      return session;
    },
  },
  secret: NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
