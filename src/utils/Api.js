import axios from "axios";
export const anotherurlBase = 'https://olp-v2.onrender.com/'

//1-Create New Material

export const create_Material = (data) => {
    return axios({
        method: 'post',
        url: `${anotherurlBase}api/new-material`,
        data: data,
        withCredentials: true
    })
}


//2-Get All Material
export const get_All_MAterials = () => {
    return axios({
        method: 'get',
        url: `${anotherurlBase}api/get-Materials`,
        withCredentials: true
    })
}


//3-Delete All Materials
export const delete_Material = (id) => {
    console.log(id);
    return axios({
        method: 'delete',
        url: `${anotherurlBase}api/delete-material`,
        data: id,
        withCredentials: true
    })
}