import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='d-flex justify-content-center my-auto py-4'>
        <button type="button" class="btn btn-success me-2"  onClick={() => dispatch(increment())}>Success</button>
        <h6 className='mt-2'>{count}</h6>
        <button type="button" class="btn btn-danger ms-2"  onClick={() => dispatch(decrement())}>Danger</button>
      </div>
    </div>
  )
}