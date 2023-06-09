import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connectDB from '@/utils/db';

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connectDB();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json('Database Error', {
      status: 500,
    });
  }
}
