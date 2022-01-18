import { combineReducers } from "redux";
import mushroomReducer from "./mushroom-reducers"


const reducers = combineReducers({
    mushrooms: mushroomReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
