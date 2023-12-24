import { GetAllLevels, addLevel } from "../type";

const initial = {
    levels: [],
    loading: true,
}

const GetLevel = (state = initial, action) => {
    switch (action.type) {
        case GetAllLevels:
            return {
                ...state,
                levels: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default GetLevel