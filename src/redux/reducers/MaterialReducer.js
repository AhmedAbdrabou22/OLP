import { CREATE_MATERIAL, GET_ALL_MATERIALS, DELETE_MATERIAL } from "../actions/Material";


export const MaterialReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_MATERIAL:
            return state = [...state,action.material]
        case GET_ALL_MATERIALS:
            return  state = action.allMaterials;
        case DELETE_MATERIAL:
            console.log(action.id);
            return state.filter(mat => mat._id !== action.id._id)

        default: return state
    }
}