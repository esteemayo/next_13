import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import connectDB from '@/utils/db';

export const GET = async (request, { params }) => {
  const { id: productId } = params;

  try {
    await connectDB();

    const post = await Post.findById(productId);

    return NextResponse.json(post, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json('Database Error', {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  const { id: productId } = params;

  try {
    await connectDB();

    await Post.findByIdAndDelete(productId);

    return NextResponse.json('Post has been deleted', {
      status: 204,
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
