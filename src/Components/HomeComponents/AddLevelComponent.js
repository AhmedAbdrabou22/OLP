import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux"
import { IoIosAddCircle } from "react-icons/io";
import { setLevelData } from '../../redux/actions/SetNewLevels';

const AddLevel = () => {
    const [show, setShow] = useState(false);
    const [name , setName] = useState("");
    const [load , setLoad] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();


    const onSubmit = async () => {
        setLoad(false)
            await dispatch(setLevelData({
                name,
            }))
        setLoad(true)
    }

    useEffect(()=>{
        if(load === true){
            setShow(false)
            window.location.reload();
        }
    } , [load])

    
    return (



        <div dir='rtl' className='mainHome'>
            <button onClick={handleShow} className='addLevelIcon'>
            <IoIosAddCircle id="icon"/>
                <span>اضافة مستوي</span>
            </button>



            {/* Modal Has Form  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Level Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <form>
                            <label>Name Level : </label>
                            <input className='form-control mt-2' type="text" id="levelname" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </form>
                        <button   className='btn mt-2 bg-primary text-light'  onClick={onSubmit}>
                            Submit
                        </button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddLevel
