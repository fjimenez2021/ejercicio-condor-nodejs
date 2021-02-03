module.exports = {
    MONGO_SRV: process.env.MONGO_SRV || 'mongodb+srv:://username:password@cluster0-jtpxd.mongodb.net/admin', 
    MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.0', 
    MYSQL_USER: process.env.MYSQL_USER || 'root', 
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
    MYSQL_DB_NAME: process.env.MYSQL_DB_NAME || 'mysql',
    MYSQL_PORT: process.env.MYSQL_PORT || 3306
};