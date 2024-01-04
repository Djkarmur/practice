import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export default async function connect(){
    const mongod = await MongoMemoryServer.create();
    const geturi = mongod.getUri();

    const db = await mongoose.connect(geturi);
    console.log("database connected");
    return db;
}