import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    trim: true,
    unique: true,
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email address',
    ],
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Please enter your username'],
    match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minlength: 8,
    maxlength: 1024,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    minlength: 8,
    maxlength: 1024,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords do not match',
    },
  },
},
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
