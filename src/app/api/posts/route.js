import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connectDB from '@/utils/db';

export const GET = async (request) => {
  try {
    await connectDB();

    const posts = await Post.find();

    return NextResponse.json(posts, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json('Database Error', {
      status: 500,
    });
  }
}
