import {GET_CATEGORIES,
        LOGIN_USER,
        GET_USERS, } from "../actions";

let initialState = {auth: [],
                    loginUsers:[],
                    allUsers: []}

export default function rootReducer(state = initialState, action:any){
    switch (action.type) {
        case GET_USERS:
        return{
            ...state,
            allUsers: action.payload
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
                loginUsers: [...state.loginUsers, action.payload],
                auth: "Auth"}
        default:
            return state;
    }
}
