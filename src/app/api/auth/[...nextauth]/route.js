import NextAuth from 'next-auth';
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

        try {
          const user = await User.findOne({ email: credentials.email }).select('+password');

          if (!user || !(await user.comparePassword(credentials.password))) {
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
