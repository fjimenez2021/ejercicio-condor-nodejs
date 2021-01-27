import Producto from "../models/Producto";

export const crearProducto = async (_,{input})=>{
    return await new Producto(input).save();
};

export const actualizarProducto = async (_,{_id,input})=>{
    return await Producto.findByIdAndUpdate(_id,input,{new :  true});
};

export const eliminarProducto = async (_,{_id})=>{
    return await Producto.findByIdAndDelete(_id);
};

export const listarProductos = async ()=>{
    return await Producto.find();
};

export const consultarProducto = async (_,{_id})=>{
    return await Producto.findById(_id);
};

export const consultarProductoReferencia = async (_,{referencia})=>{
    return await Producto.find({"referencia" : referencia});
};