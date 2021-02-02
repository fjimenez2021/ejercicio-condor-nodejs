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
    MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.0', 
    MYSQL_USER: process.env.MYSQL_USER || 'root', 
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME || 'mysql',
    MYSQL_PORT: process.env.MYSQL_PORT || 3306
};