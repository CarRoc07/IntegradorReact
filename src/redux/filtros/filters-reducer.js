
import { Filtros } from "../../data/Filtros";
import { SELECT_CATEGORY } from "./filters-actions";

const INITIAL_STATE = {
    filters: Filtros,
    selectedCategory: null,
};

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
    case SELECT_CATEGORY:
        return {
        ...state,
        selectedCategory: action.payload !== state.selectedCategory ? action.payload : null,
        };
    default:
        return state;
    }
};

export default filtersReducer;