import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Delete_Material_Action } from '../../redux/actions/Material';
const ModalDelete = ({ title, hint, id ,setMessage }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const handleDelete = () => {
        try {
            dispatch(Delete_Material_Action({ _id: id })).then(res => {
                setMessage(res.data.message)
                console.log(res.data.message);
            })
            handleClose();
        } catch (e) {
            console.warn(e);
            setMessage(e.message)
            console.log(e.message);
            handleClose()
        }
    }
    return (
        <div>
            <MdDeleteForever onClick={handleShow} className='mx-2 fs-3 icons delete' />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> {hint}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={()=>handleDelete()}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDelete
