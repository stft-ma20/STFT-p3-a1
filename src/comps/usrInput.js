import React, { useEffect, useRef } from 'react'

export default function UsrInput(props) {

    const ref_yourAmount = useRef();
    const ref_yourCurr = useRef();
    const ref_targetCurr = useRef();
    const arr = Object.entries(props.apiData);;

    const inputChanged = () => {
        let val = 0;
        if (ref_yourCurr.current.value == 1) {
            val = ref_targetCurr.current.value * ref_yourAmount.current.value;
        } else {
            val = (1.0 / ref_yourCurr.current.value) * ref_yourAmount.current.value * ref_targetCurr.current.value;
        }

        props.resultUpdateApp(val);
    }

    const switchCurr = () => {
        let tmp = ref_yourCurr.current.selectedIndex;
        ref_yourCurr.current.selectedIndex = ref_targetCurr.current.selectedIndex;
        ref_targetCurr.current.selectedIndex = tmp;
        inputChanged();
    }




    return (
        <div className='row'>
            <div className='d-flex justify-content-center m-3'>
                <label className='mx-2 h5'>Your amount: </label>
                <input type="number" ref={ref_yourAmount} onChange={inputChanged} ></input>
            </div>

        <dir className='d-flex justify-content-center m-3'>
            <label className='mx-2'>Your Currency:</label>
            <select ref={ref_yourCurr} onChange={inputChanged}>

                {
                    arr.map((item) => {
                        return <option key={item[0]} value={item[1]}>{item[0]}</option>
                    })
                }

            </select>
        </dir>

            <div className=' '>
                <button className='p-1 d-block mx-auto btn btn-secondary' onClick={switchCurr}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
                        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                    </svg>
                </button>
            </div>

            <div className='d-flex justify-content-center m-3'>
            <label className='mx-2'>Target Currency:</label>
            <select ref={ref_targetCurr} onChange={inputChanged}>

                {
                    arr.map((item) => {
                        return (<option  key={item[0]} value={item[1]}>{item[0]}</option>)
                    })
                }

            </select>
                </div>
        </div>
    )
}
