import { GET_PRODUCTS } from "../../actions/catalogo/productsActions";



let initialState = {
    allProducts: []
};

export default function productsReducer(state = initialState, action){
    switch(action.type){

        case GET_PRODUCTS:
            console.log(action.payload)
            return {
                ...state,
                allProducts: action.payload
            }
        default:
            return state;
    }
}
