import {GET_CATEGORIES,
        TOGGLE_MAIN_RENDER,
        TOGGLE_ITEM_MAIN_RENDER,
        LOGIN_USER, } from "../actions";


let initialState = {StateInit: [],
                    mainRender: "",
                    deployItemRender: "",
                    loginUsers:[]}

export default function rootReducer(state = initialState, action:any){
    switch (action.type) {

        case TOGGLE_ITEM_MAIN_RENDER:
            return {
                ...state,
                deployItemRender: action.payload
            }
        case TOGGLE_MAIN_RENDER:
            return {
                ...state,
                mainRender: action.payload
            }

        case GET_CATEGORIES:
            return {
                ...state,
                StateInit: action.payload
            }
        case LOGIN_USER:
            alert("Login autorizado")
            return{
                ...state,
                loginUsers: [...state.loginUsers, action.payload]
                }
        default:
            return state;
    }
}
