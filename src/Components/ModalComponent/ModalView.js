import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { FaRegEye } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
const ModalView = ({ title, hint }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <FaRegEye className='mx-2 fs-3 icons edit' onClick={handleShow} />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>{hint}</label>
                    <input type='text' className='form-control' name="update" id="level" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    اغلاق
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        حفظ التغيرات
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalView
