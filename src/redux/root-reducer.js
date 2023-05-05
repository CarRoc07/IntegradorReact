import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from "./filtros/filters-reducer";
import cartReducer from "./cart/cart-reducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart'],
    };
    
    const rootReducer = combineReducers({
        filters: filtersReducer,
        cart: cartReducer
    });
    
    
    export default persistReducer(persistConfig, rootReducer);