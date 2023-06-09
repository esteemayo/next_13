import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';

export const POST = async (request) => {
  const { name, email, username, password, confirmPassword } = await request.json();

  await connectDB();

  const newUser = {
    name,
    email,
    username,
    password,
    confirmPassword,
  };

  try {
    const user = await User.create({ ...newUser });

    if (user) {
      return NextResponse.json(user, {
        status: 201,
      });
    }
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
