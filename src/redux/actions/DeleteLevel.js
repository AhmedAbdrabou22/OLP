//Delete Level
import baseURL from '../../Api/baseUrl'
import { DELETE_LEVELS } from '../type'

const DeleteLevel = (id) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.delete(`api/delete-level/` , id)
            dispatch({ type: DELETE_LEVELS, payload: res })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {DeleteLevel}