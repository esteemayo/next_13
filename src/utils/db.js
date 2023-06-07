import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ↔ ${conn.connection.port}`);
  } catch (error) {
    throw error;
    // throw new Error('Conection failed!');
  }
};

mongoose.connection.on('disconnect', () => {
  console.log('MongoDB disconnected');
});

export default connectDB;
