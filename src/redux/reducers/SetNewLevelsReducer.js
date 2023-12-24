import {SetNewLevels}  from "../type";

const initial = {
    setlevels: [],
    loading: true,
}

const SetNewLevelsReducer = (state = initial, action) => {
    switch (action.type) {
        case SetNewLevels:
            return {
                ...state,
                setlevels: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default SetNewLevelsReducer