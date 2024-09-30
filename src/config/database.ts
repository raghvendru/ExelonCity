import mongoose from 'mongoose';

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb+srv://raghavendr:12345@devtinder.npcym.mongodb.net/City");
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

export default connectDb;
