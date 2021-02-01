import mongoose from "mongoose";
import config from "../config/config";

export async function connect (){
    try {
        let srv = await rutaSrv();
        await mongoose.connect(srv, {
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

async function rutaSrv (){
    let srv = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DB_NAME}?retryWrites=true&w=majority`
    return srv;
}