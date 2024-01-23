import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement_index, increment_index, increment, increment1, increment_arr, search, editOpen, editOpen2, openModal } from '../features/counter/counterSlice'
import ModalApp from '../Components/ModalApp'
export default function Counter() {
  const count = useSelector((state) => state.counter.count)
  const count1 = useSelector((state) => state.counter.count1)
  const array = useSelector((state) => state.counter.array)
  const users = useSelector((state) => state.counter.users)
  const search_arr = useSelector((state) => state.counter.search_arr)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())
  }, [])


  const editItem = (item, index) => {
    dispatch(editOpen(item))
    dispatch(editOpen2(index))
  }

  return (
    <div className='container'>
      <div>
        <h2>{count} Metr</h2>
        <button onClick={() => dispatch(increment(count1))} className='btn btn-success'>yurish</button>

        <h2>Qadam kattaligi: {count1} metr</h2>
        <button onClick={() => dispatch(increment1())} className='btn btn-info'>qadamni keygaytirish</button>


        <div className='my-5'>
          <div>
            <button onClick={() => dispatch(increment_arr(0))} className='btn btn-primary'>add counter</button>
          </div>
          {
            array.map((item, index) => {
              return <div key={index}>
                <button onClick={() => dispatch(increment_index(index))} className='btn btn-success'>+</button>
                <span>{item}</span>
                <button onClick={() => dispatch(decrement_index(index))} className='btn btn-danger'>-</button>
              </div>
            })
          }
        </div>

      </div>

      <ModalApp />
      <div className="row ">
        <div className=" d-flex align-items-center gap-5">
          <div className="col-2 offset-2  my-2">
            <input type="text" placeholder='Seach' onChange={(e) => dispatch(search(e.target.value))} className='form-control' />
          </div>
          <div className="col-2 ">
            <button onClick={() => dispatch(openModal())} className='btn btn-primary '>Add user</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>№</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                search_arr.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => editItem(item, index)} className='btn btn-info'>edit</button>
                      <button className='btn btn-danger mx-2'>delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
