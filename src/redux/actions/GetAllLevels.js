import axios from 'axios'
import baseURL from '../../Api/baseUrl'
import { GetAllLevels, SetNewLevels } from '../type'


//Get All Levels
const getAllLevelsData = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('api/get-levels')
            dispatch({ type: GetAllLevels, payload: res })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}




export {getAllLevelsData}