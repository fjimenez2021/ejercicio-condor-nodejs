import dotenv from "dotenv";

try {
    const result = dotenv.config({silent: true});
    if (result.error) {
        throw result.error;
    }
} catch (error) {
    console.log("Not found .env >>")
}
/*const { env: envs } = process;
module.exports = envs;*/
module.exports = {
    MONGO_HOST: process.env.MONGO_HOST || '127.0.0.0', 
    MONGO_USER: process.env.MONGO_USER || '', 
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || 'admin',
    MONGO_PORT: process.env.MYSQL_PORT || 27017 ,
    MONGO_READ_PREFERENCE:process.env.MONGO_READ_PREFERENCE || 'secondaryPreferred',
    MONGO_SSL: process.env.MONGO_SSL || false,
    MONGO_REPLICA_SET:process.env.MONGO_REPLICA_SET || '',
    MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE || 'admin',

    MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.0', 
    MYSQL_USER: process.env.MYSQL_USER || 'root', 
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME || 'mysql',
    MYSQL_PORT: process.env.MYSQL_PORT || 3306
};