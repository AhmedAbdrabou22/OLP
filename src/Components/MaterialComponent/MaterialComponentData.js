import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from "react-redux"
import { Create_Material } from '../../redux/actions/Material';
const MaterialComponentData = () => {
    const [show, setShow] = useState(false);
    const [code, setCode] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isUploaded, setIsUploaded] = useState(false);
    const handleUpload = () => {
        setIsUploaded(true);
        setTimeout(() => {
            setIsUploaded(false);
        }, 5000);
        handleClose()

        
    };


    const dispatch = useDispatch();


    const onSubmit =  () => {
            dispatch(
                Create_Material({
                    name,
                    code,
                })
            ).then(res => {
                console.log(res.data);
                setMessage(res.data.message)}).catch((e)=>{console.warn(e) 
                setMessage(e.message)
            })
            handleUpload()
    }


    // const data = useSelector(state => state.MaterialReducer);

    return (
        <div>
            <div>
                <div style={{ position: "relative" }}>
                    {
                        message? (
                            <p className={`shadow w-25 mt-2 text-center bg-danger text-light p-2 notify ${isUploaded ? 'slide' : ''}`}> {message}</p>
                        ):(<p className={`shadow w-25 mt-2 text-center bg-primary text-light p-2 notify ${isUploaded ? 'slide' : ''}`}> {message}</p>)
                    }
                </div>
            </div>

            <div dir='rtl' className='mainHome'>
                <button className='addLevelIcon' onClick={handleShow}>
                    <IoIosAddCircle id="icon" />
                    <span>اضافة ماده</span>
                </button>
            </div>



            {/* Modal Has Form  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Matrial Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>Material Level : </label>
                        <input className='form-control mt-2' value={name} onChange={(e)=>setName(e.target.value)} type="text" id="levelname" />
                        <label>Material Code : </label>
                        <input className='form-control mt-2' value={code} onChange={(e)=>setCode(e.target.value)} type="number" id="code" />
                    </form>
                    <button className='btn mt-2 bg-primary text-light' onClick={onSubmit}>
                        Submit
                    </button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MaterialComponentData
