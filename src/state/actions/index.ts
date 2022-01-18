import { MushroomActionType } from "../action-types"
import {Mushroom} from "../dto";

interface RequestAllAction {
    type: MushroomActionType.REQUESTED
}

interface ReceivedAction {
    type: MushroomActionType.RECEIVED,
    payload: Mushroom[]
}

export type Action = RequestAllAction | ReceivedAction ;
