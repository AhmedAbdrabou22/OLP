import React, { useEffect } from 'react'
import MaterialComponentData from '../../Components/MaterialComponent/MaterialComponentData'
import AllMaterialsData from '../../Components/MaterialComponent/AllMaterialsData'
import { useDispatch, useSelector } from "react-redux"
import { Get_All_Materials } from '../../redux/actions/Material'

const Material = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Get_All_Materials()).then((res)=>{console.log(res);})
    }, [])
    return (
        <div>
            <MaterialComponentData/>
            <AllMaterialsData/>
        </div>
    )
}

export default Material
