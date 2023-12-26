import { create_Material, get_All_MAterials , delete_Material } from "../../utils/Api";


//Create Material
export const CREATE_MATERIAL = "CREATE_MATERIAL"
const createMaterial = (material) => {
    return {
        type: CREATE_MATERIAL,
        material
    }
}

export const Create_Material = (data) => {
    return (dispatch) => {
        return create_Material(data).then(res => {
            if (res.data.case) {
                dispatch(createMaterial(res.data))
            } 
            return res
        })
    }
}

//Get All Materials

export const GET_ALL_MATERIALS = "GET_ALL_MATERIALS"

const getAllMaterials = (allMaterials) => {
    return {
        type: GET_ALL_MATERIALS,
        allMaterials
    }
}
export const Get_All_Materials = () => {
    return (dispatch) => {
        return get_All_MAterials().then(res => {
            console.log(res.data);
            if (res.data.case) {
                dispatch(getAllMaterials(res.data.materials))
            } 
            return res
        })
    }
}


//Delete Material
export const DELETE_MATERIAL = 'DELETE_MATERIAL';

const deleteMaterial = (id) => {
    return {
        type: DELETE_MATERIAL,
        id
    }
}
// Delete level
export const Delete_Material_Action = (id) => {
    return (dispatch) => {
        return delete_Material(id).then(res => {
            if (res.data.case) {
                dispatch(deleteMaterial(id))
            }
            return res
        })
    }
}