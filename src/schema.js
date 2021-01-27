import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = ` 
    type Query {
        hello: String!
        listarProductos: [Producto]
        consultarProducto(_id:ID): Producto
    }

    type Mutation {
        crearProducto(input:ProductoInput): Producto
        actualizarProducto(_id:ID,input:ProductoInput): Producto
        eliminarProducto(_id:ID): Producto
    }

    type Producto {
        _id : ID
        referencia: String!
        nombre: String!
        precio: Float
    }

    input ProductoInput {
        referencia: String!
        nombre: String!
        precio: Float
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})