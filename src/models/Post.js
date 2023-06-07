import slugify from 'slugify';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A post must have a title'],
  },
  desc: {
    type: String,
    required: [true, 'A post must have a description'],
  },
  image: {
    type: String,
    required: [true, 'A post must have an image'],
  },
  content: {
    type: String,
    required: [true, 'A post must have a content'],
  },
  username: {
    type: String,
    required: [true, 'A post must belong to a user'],
  },
},
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
