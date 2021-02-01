import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";
import { connect } from "./mongodb";
import cors from "cors";
import routerProducto from "./routes/producto-route";
import {connectRedis} from "./redisClient";
import { connectMysql } from "./mysql-database";
import routerStudent from "./routes/student-route";
import bodyParser from "body-parser";

const app = express();
connect();
connectMysql();
connectRedis();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});

// Routes
app.use('/productos',routerProducto);
app.use(routerStudent);

app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: schema
    }),
  );

app.listen(3000, () => console.log("Server on port 3000"));