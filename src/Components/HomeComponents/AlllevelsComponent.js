import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllLevelsData } from '../../redux/actions/GetAllLevels';
import ModalEdit from '../ModalComponent//ModalEdit';
import ModalDelete from '../ModalComponent//ModalDelete';
import ModalView from '../ModalComponent/ModalView';



const Alllevels = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllLevelsData())
    }, [])
    const levelsContainer = useSelector(state => state.GetLevel.levels)


    return (
        <div className='' dir='rtl'>
            {
                levelsContainer && levelsContainer.data ? (
                    levelsContainer.data.case === true ? (
                        levelsContainer.data.levels.map((item) => {
                            return (
                                <div className='w-50 m-auto bg-primary mb-2 p-3 ' key={item._id} style={{ borderRadius: "10px" }}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='text-light'>{item.name}</p>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <ModalEdit title={"تعديل المستوي"} hint={"تفاصيل تعديل المستوي"}/>
                                            <ModalDelete title={"حذف المستوي"} hint={"هل تريد حذف المستوي؟"}/>
                                            <ModalView title={"تحديث المستوي"} hint={"هل تريد تحديث المستوي؟"}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (null)
                ) : (<h2 className='text-center'>لا يوجد مستويات</h2>)
            }

        </div>
    )
}

export default Alllevels
