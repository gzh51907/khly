import {combineReducers} from 'redux';

import cartReducer from './cart';

let rootReducer = combineReducers({
    cart:cartReducer
})

export default rootReducer;