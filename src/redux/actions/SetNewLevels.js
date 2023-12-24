//Set New Levels
import baseURL from '../../Api/baseUrl'
import {SetNewLevels}  from '../type'

const setLevelData = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/new-level' ,data)
            dispatch({ type: SetNewLevels, payload: res })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {setLevelData}