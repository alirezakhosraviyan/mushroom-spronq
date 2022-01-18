import { Dispatch } from "redux"
import { MushroomActionType } from "../action-types"
import { Action } from "../actions"
import MushroomApiCall from './fake-api'
import { Mushroom } from '../dto'

/*
* API-Calls are here
* */

export const getAllMushrooms = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: MushroomActionType.REQUESTED,
        })

        const mushrooms: Mushroom[] = await MushroomApiCall()

        dispatch({
            type: MushroomActionType.RECEIVED,
            payload: mushrooms
        })
    }
}
