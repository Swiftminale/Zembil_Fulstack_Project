import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined in the environment variables");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Zembil_Admin",
      serverSelectionTimeoutMS: 60000,
    });

    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    isConnected = false;
    throw err; // Re-throw the error so it can be caught in the API route
  }
};
