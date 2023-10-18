import {GET_CATEGORIES,
        LOGIN_USER,
        GET_USERS,
        TOGGLE_LOADING,
        INVALID_CREDENTIALS,
        SET_ERRORS,
        DELETE_CATEGORY, } from "../actions";

let initialState = {auth: ["Auth"], // Se verifica si el usuario es autenticado
                    loginUsers:[], // Guarda el token, y el email de quien se logueo correctamente
                    allUsers: [], // trae a todos los usuario
                    isLoading : true,
                    invalidCredentials: false, // verifica si se ha terminado una peticion
                    errors: [],
                    allCategories: []
                }

export default function rootReducer(state = initialState, action:any){
    switch (action.type) {
        
        case DELETE_CATEGORY: // refrescamos el estado de categorias despues de eliminar
            const categoryId: string = action.payload;
            const filterArray = state.allCategories.filter(element => element._id !== categoryId);
            return{
                ...state,
                allCategories: filterArray;
            }
        case GET_CATEGORIES:
            return{
                ...state,
                allCategories: action.payload
            }
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

