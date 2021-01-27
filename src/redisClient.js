import redis from "redis";

const REDIS_PORT = process.env.REDIS_PORT || 6379;
var redisClient = null;
var sw = false;
var isConnected = false;

export const isConnectedRedis = () => {
    return isConnected;
}

export const connectRedis = async () => {
    redisClient = await redis.createClient(REDIS_PORT);
    redisClient.on('connect', function(){
        sw = false;
        isConnected = true;
        console.log('Connected to Redis');
    });
    
    redisClient.on('error', function(err) {
        isConnected = false;
        if(!sw){
            sw = true;
            console.log('Redis error: ' + err);
        }   
    });
}

export const getRedisClient = async () => {
    return redisClient;
}
