import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MONGODB connect: " + connection.connection.host);
  } catch (error) {
    console.log("MONGODB connection is: " + error.message);
    process.exit(1);
  }
};
