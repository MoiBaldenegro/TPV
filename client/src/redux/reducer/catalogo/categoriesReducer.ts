import { SEARCH_CATEGORIES, GET_CATEGORIES } from "../../actions/catalogo/categoriesActions";
  
  const initialState = {
    allCategories: [],
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
                case GET_CATEGORIES:
                    return{
                        ...state,
                        allCategories: action.payload
                    }
      default:
        return state;
    }
  }
  