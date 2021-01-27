import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";
import { connect } from "./database";
import cors from "cors";
import routerProducto from "./routes/producto-route";
import {connectRedis} from "./redisClient";
import { connectMysql } from "./mysql-database";

const app = express();
connect();
connectMysql();
connectRedis();

app.use(cors());

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

// Routes
app.use('/productos',routerProducto);

app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: schema
    }),
  );

app.listen(3000, () => console.log("Server on port 3000"));