import React, { useEffect  ,useState } from 'react'
import ModalEdit from '../ModalComponent/ModalEdit'
import ModalDelete from '../ModalComponent/ModalDelete'
import ModalView from '../ModalComponent/ModalView';
import {  Get_All_Materials } from '../../redux/actions/Material';
import { useDispatch, useSelector } from "react-redux"
const AllMaterialsData = () => {


    const[message,setMessage] = useState('')
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(Get_All_Materials()).then((res)=>{console.log(res);})
    // }, [])

    const {MaterialReducer} = useSelector(mapDAta)

    console.log(MaterialReducer);




    return (
        <div dir='rtl'>
            {
                MaterialReducer ? (
                    MaterialReducer.map((item) => {
                        return (
                            <div className='w-50 m-auto bg-primary mb-2 p-3 ' key={item._id} style={{ borderRadius: "10px" }}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='text-light'>{item.name}-{item.code} {item._id}</p>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <ModalEdit title={"تعديل الماده"} hint={"تفاصيل تعديل الماده"} />
                                        <ModalDelete title={"حذف الماده"} hint={"هل تريد حذف الماده"} id={item._id} setMessage={setMessage}/>
                                        <ModalView title={"تحديث الماده"} hint={"هل تريد تحديث الماده"} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (null)
            }
        </div>
    )
}

function mapDAta ({MaterialReducer}){
    console.log(MaterialReducer)
    return {MaterialReducer}
}
export default AllMaterialsData
