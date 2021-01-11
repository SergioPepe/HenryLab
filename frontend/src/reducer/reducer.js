import { BUSCAR_PRODUCTOS } from "../constants/constants"

const initialState = {
    productos: []
}

function Reducer(state  = initialState, action) {
    switch (action.type) {
        case BUSCAR_PRODUCTOS : {
            return {
                ...state,
                productos: action.productos
            }
        }
        default:
            return state;
    }
}

export default Reducer;