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
}
