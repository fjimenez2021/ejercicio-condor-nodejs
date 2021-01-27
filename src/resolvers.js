import  * as productoService from "./services/ProductoService";

export const resolvers = {
    Query:{
        hello : ()=>{
            return "Hola"
        },
        listarProductos : productoService.listarProductos,
        consultarProducto : productoService.consultarProducto
    },
    Mutation: {
        crearProducto : productoService.crearProducto,
        actualizarProducto : productoService.actualizarProducto,
        eliminarProducto : productoService.eliminarProducto
    }
}