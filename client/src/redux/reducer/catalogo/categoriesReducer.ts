import { SEARCH_CATEGORIES, GET_CATEGORIES_SUCESS, GET_CATEGORIES_REQUEST, GET_CATEGORIES_FAILURE } from "../../actions/catalogo/categoriesActions";
  
  const initialState = {
    allCategories: [],
    loading: false,
    error: null
  };
  
  export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
            case SEARCH_CATEGORIES:
                const value = action.payload;
                const categoriesSearch = state.allCategories.filter(element => element.categoryName.toLowerCase().includes(value.toLowerCase()))
                return{
                    ...state,
                    allCategories: categoriesSearch
                }
                case GET_CATEGORIES_SUCESS:
                    return{
                        ...state,
                        allCategories: action.payload
                    }
                    case GET_CATEGORIES_REQUEST:
                      return{
                        ...state,
                      loading: true  
                      }
                      case GET_CATEGORIES_FAILURE:
                        return {
                          ...state,
                          error: action.error,
                          isLoading: false,
                        };
      default:
        return state;
    }
  }
  