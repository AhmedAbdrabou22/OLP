import {combineReducers} from "redux"
import GetLevel from './GetLevel'
import SetNewLevelsReducer from "./SetNewLevelsReducer"
import { MaterialReducer } from "./MaterialReducer"
export default combineReducers({
    GetLevel:GetLevel,
    SetNewLevelsReducer:SetNewLevelsReducer,
    MaterialReducer,
})