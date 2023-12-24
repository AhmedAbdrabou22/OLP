import {combineReducers} from "redux"
import GetLevel from './GetLevel'
import SetNewLevelsReducer from "./SetNewLevelsReducer"
import { DeleteLevel } from "../actions/DeleteLevel"
export default combineReducers({
    GetLevel:GetLevel,
    SetNewLevelsReducer:SetNewLevelsReducer,
    DeleteLevel:DeleteLevel
})