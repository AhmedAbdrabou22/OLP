import { DELETE_LEVELS } from "../type";

const initial = {
    deleteLevels: [],
    loading: true,
}

const SetNewLevelsReducer = (state = initial, action) => {
    switch (action.type) {
        case DELETE_LEVELS:
            return {
                ...state,
                deleteLevels: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default SetNewLevelsReducer