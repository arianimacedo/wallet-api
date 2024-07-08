import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
  
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Mongo conectado")
    } catch (err) {
        console.log(err.message);
    }
}

export async function disconnectDb() {
    await mongoose.disconnect();
}
    