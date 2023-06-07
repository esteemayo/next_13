import slugify from 'slugify';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A post must have a title'],
  },
  slug: String,
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

postSchema.pre('save', async function (next) {
  if (!this.isModified('title')) return next();
  this.slug = slugify(this.title, { lower: true });

  const regEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const postWithSlug = await this.constructor.find({ slug: regEx });

  if (postWithSlug.length) {
    this.slug = `${this.slug}-${postWithSlug.length + 1}`;
  }
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
