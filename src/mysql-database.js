import knex from "knex";
import config from "../config/config";

export var knexMysql = null;
export async function connectMysql() {
    try {
        console.log("config: ",config)
        knexMysql = await knex({
            client: 'mysql',
            connection: {
                host: config.MYSQL_HOST,
                user: config.MYSQL_USER,
                password: config.MYSQL_PASSWORD,
                database: config.MYSQL_DB_NAME,
                port: config.MYSQL_PORT || 3306
            },
            pool:{
                min : 0,
                max:10
            }
        });

        // Note: here we are getting the Mysql credentials from process.env
        console.log(">>> DB Mysql is connected");
    } catch (e) {
        console.error("Error connected DB Mysql");
        console.error(e);
    }
}

export async function closeMysql (){
    try {
        await knexMysql.destroy();
        console.log(">>> DB Mysql is closed");
    } catch (e) {
        console.error("Error to disconnect Mysql DB");
        console.error(e);
    }
}
