import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { toggle, addUser } from '../features/counter/counterSlice';
export default function ModalApp() {
    const modal = useSelector((state) => state.counter.modal)
    const defualtValue = useSelector((state) => state.counter.defualtValue)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            age: e.target[2].value,
            email: e.target[3].value,
        }
        dispatch(addUser(payload))
    } 

  return (
    <div>
        <Modal isOpen={modal} toggle={()=> dispatch(toggle(false))}>
            <ModalHeader>
                <h3>Add User</h3>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input type="text" placeholder='first name' defaultValue={defualtValue.first_name} className='form-control my-1' />
                    <input type="text" placeholder='last name' defaultValue={defualtValue.last_name} className='form-control my-1' />
                    <input type="text" placeholder='age' defaultValue={defualtValue.age} className='form-control my-1' />
                    <input type="text" placeholder='email' defaultValue={defualtValue.email} className='form-control my-1' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-info'>save</button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
