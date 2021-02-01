import * as productoService from "../src/services/ProductoService";
import {connect,close} from "../src/mongodb";
import productosJSON from "../api/productos.json";

beforeAll(async (done) => {
    await connect();
    done();
});

afterAll(async (done) => {
    await close();
    done();
});

describe("Filter function producto", () => {
    test("it should  add productos from json", async (done) => {
        for (const data of productosJSON) {
            let productos = await productoService.consultarProductoReferencia(null,{referencia:data.referencia});
            if(productos === null || productos.length===0){
                await productoService.crearProducto(null,{input:data});
            }
        }
        done();
    });
    test("it should filter a product by id", async (done) => {
        let _id = { _id: "600f4ae98b105119fd98fab8" };
        const producto = await productoService.consultarProducto(null, _id);
        const input = producto.referencia;
        const output = "0002";
        expect(input).toEqual(output);
        done();
    })

    test("it should list product", async (done) => {
        let productos = await productoService.listarProductos();
        expect(productos.length).toBeGreaterThan(2);
        done();
    });

    test("it should add product", async (done) => {
        let referencia = "0005";
        let productos = await productoService.consultarProductoReferencia(null,{referencia:referencia});
        if(productos === null || productos.length===0){
            let newProducto = {
                "referencia": referencia,
                "nombre": "Hits",
                "precio": 8000
            }
            newProducto = await productoService.crearProducto(null,{input:newProducto});
            expect(newProducto._id).not.toBeNull();
        }
        done();
    });

    test("it should edit product", async (done) => {
        let referencia = "0005";
        let productos = await productoService.consultarProductoReferencia(null,{referencia:referencia});
        if(productos !== null && productos.length>0){
            let _id = productos[0]._id;
            let input = {
                "referencia": productos[0].referencia,
                "nombre": productos[0].nombre,
                "precio": 10000
            }
            let oldProducto = await productoService.actualizarProducto(null,{_id:_id,input:input});
            expect(oldProducto.precio).toBe(10000);
        }
        done();
    });

    test("it should delete product", async (done) => {
        let referencia = "0005";
        let productos = await productoService.consultarProductoReferencia(null,{referencia:referencia});
        if(productos !== null && productos.length>0){
            let _id = productos[0]._id;
            let deleteProducto = await productoService.eliminarProducto(null, _id);
            console.log("delete: ",deleteProducto);
            expect(deleteProducto.referencia).toBe(referencia);
        }
        done();
    });
});