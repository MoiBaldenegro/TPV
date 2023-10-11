import {GET_CATEGORIES,
        LOGIN_USER,
        GET_USERS,
        TOGGLE_LOADING,
        INVALID_CREDENTIALS,
        SET_ERRORS, } from "../actions";

let initialState = {auth: ["Auth"], // Se verifica si el usuario es autenticado
                    loginUsers:[], // Guarda el token, y el email de quien se logueo correctamente
                    allUsers: [], // trae a todos los usuario
                    isLoading : true,
                    invalidCredentials: false, // verifica si se ha terminado una peticion
                    errors: []
                }

export default function rootReducer(state = initialState, action:any){
    switch (action.type) {
        case SET_ERRORS:
            return{
                ...state,
                errors: action.payload
            }
        case INVALID_CREDENTIALS:
            console.log(action.payload)
            return{
                ...state,
                invalidCredentials: action.payload
            }
        case TOGGLE_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }
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
            return{
                ...state,
                loginUsers: [...state.loginUsers, action.payload],
                auth: "Auth"
            }
        default:
            return state;
    }
}

