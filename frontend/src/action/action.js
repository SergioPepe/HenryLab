import { BUSCAR_PRODUCTOS } from "../constants/constants"

export function buscarProductos(productos) {
    return {
        type: BUSCAR_PRODUCTOS,
        productos
    };
}