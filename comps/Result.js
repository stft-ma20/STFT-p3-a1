import React from 'react'

export default function Result(props) {
  return (
    <div className='m-4 d-flex justify-content-center align-items-center'>
        <h3 className='m-0 p-0'>Result:</h3>
        <p className='align-middle p-0 m-0 fs-3 mx-3'>{props.rslt.toFixed(3)}</p>
    </div>
  )
}
