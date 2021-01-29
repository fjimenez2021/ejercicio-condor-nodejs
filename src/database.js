import mongoose from "mongoose";
import config from "../config/config.json";

export async function connect (){
    try {
        await mongoose.connect(config.MONGO_SRV, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(">>> DB is connected");
    } catch (e) {
        console.error("Error connected DB");
        console.error(e);
    }
}

export async function close (){
    try {
        await mongoose.connection.close();
        console.log(">>> DB is closed");
    } catch (e) {
        console.error("Error to disconnect DB");
        console.error(e);
    }
}