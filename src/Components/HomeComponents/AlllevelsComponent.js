import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllLevelsData } from '../../redux/actions/GetAllLevels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteLevel } from '../../redux/actions/DeleteLevel';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ModalEdit from '../ModalComponent//ModalEdit';
import ModalDelete from '../ModalComponent//ModalDelete';



const Alllevels = () => {
    const [load, setLoad] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllLevelsData())
    }, [])
    const levelsContainer = useSelector(state => state.GetLevel.levels)

    // if(levelsContainer){
    //     console.log(levelsContainer);
    // }

    // const deleteLevel = (id) => {
    //     setLoad(false)
    //     dispatch(DeleteLevel(id))
    //     setLoad(true)
    //     setIdItem(null)
    // }

    // useEffect(() => {
    //     if (load === true) {
    //         window.location.reload()
    //     }
    // }, [load])

    // const deletedata = useSelector(state => state.DeleteLevel.deleteLevels)

    // if (deletedata) {
    //     console.log(deletedata);
    // }

    // const [idItem, setIdItem] = useState(null);

    // console.log(idItem);

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
                                            <ModalEdit/>
                                            <ModalDelete/>
                                            <FontAwesomeIcon className='mx-2 icons edit' icon={faEye} />
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
