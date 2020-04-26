import { combineReducers } from 'redux'
import { countCartReducer } from './Cart/reducer'
export const reducers = combineReducers({
    countCart: countCartReducer,
})
