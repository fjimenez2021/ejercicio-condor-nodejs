import express from "express";
import * as productoService from "../services/ProductoService";
import {getRedisClient,isConnectedRedis} from "../redisClient";

const routerProducto = express.Router();
const REDIS_KEY = "/productos/";

routerProducto.get("/", async (req,res)=>{
    let client = await getRedisClient();
    if(isConnectedRedis()){
        client.get(REDIS_KEY, async (err, result) => {
            if(result){
                console.log("get redis cache");
                res.json(JSON.parse(result));
            }else{
                findAllProducto(client,req,res);
            }
        });
    }else{
        findAllProducto(client,req,res);
    }
});

const findAllProducto = async (client,req,res) =>{
    let productos = await productoService.listarProductos();
    console.log("get service producto");
    if(isConnectedRedis()){
        client.set(REDIS_KEY, JSON.stringify(productos));
    }
    res.json(productos);
}

module.exports = routerProducto;