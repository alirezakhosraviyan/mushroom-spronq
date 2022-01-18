import { MushroomActionType } from "../action-types"
import { Action } from "../actions"
import {Mushroom} from "../dto";

interface MushroomInterface {
    data?: Mushroom [],
    isLoading: boolean
}
const initialState: MushroomInterface = {
    data: [],
    isLoading: false
};

/*
* Mushroom datasource reducer
* */

const reducer = (state: MushroomInterface = initialState, action: Action): MushroomInterface => {
    switch (action.type){
        case MushroomActionType.REQUESTED:
            return {
                data: [],
                isLoading: true
            };
        case MushroomActionType.RECEIVED:
            return {
                data: action.payload,
                isLoading: false
            };
        default:
            return state
    }
}

export default reducer
