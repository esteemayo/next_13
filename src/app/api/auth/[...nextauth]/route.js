import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/User';
import connectDB from '@/utils/db';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connectDB();

        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email }).select('+password');

          if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Wrong credentials!');
          }
          return user;
        } catch (err) {
          throw new Error(err);
        }
      }
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
});

export { handler as GET, handler as POST };
