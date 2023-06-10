import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connectDB from '@/utils/db';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  try {
    await connectDB();

    const posts = await Post.find(username && { username });

    return NextResponse.json(posts, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json('Database Error', {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  try {
    const post = await Post.create({ ...body });

    return NextResponse.json(post, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
