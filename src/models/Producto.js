import { Schema, model } from "mongoose";

const productoSchema =  new Schema({
    referencia: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: Number
});

export default model("Producto",productoSchema);