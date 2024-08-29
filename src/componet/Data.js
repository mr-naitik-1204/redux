import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../app/slice/counterSlice'
import {  add, deleteItem, editItem } from '../app/slice/counterSlice';

function Data() {
    // const data = useSelector(state => state.counter.value)
    const [data, setdata] = useState({ fname: "", lname: "" })
    const arry = useSelector(state => state.counter.arry);
    const dispatch = useDispatch()
    const [togle, settogle] = useState(undefined)
    console.log(data);


    const handleDelete = (index) => {
        dispatch(deleteItem(index));
    };

    const edit = () => {
        dispatch(editItem({data, togle}));
        settogle(undefined)
    }



    return (
        <div>
            {/* {data} */}
            {/* <h2>Name: {name || 'No Name'}</h2> */}
            {/* <button onClick={() => dispatch(increment())}>Add</button>
            <button onClick={() => dispatch(decrement())}>Sub</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Action</button>
 */}

            <input
                type="text"
                placeholder="Enter new name"
                value={data.fname}
                name='fname'
                onChange={(e) => setdata({ ...data, fname: e.target.value })}
                style={{ marginTop: '10px' }}
            />
            <input
                type="text"
                placeholder="Enter new name"
                value={data.lname}
                name='lname'
                onChange={(e) => setdata({ ...data, lname: e.target.value })}
                style={{ marginTop: '10px' }}
            />

            <button type='button' onClick={() => {togle!=undefined ? edit() : dispatch(add(data)) }} style={{ marginTop: '10px' }}>
                {togle!=undefined ? "edit" : "add"}
            </button>
            <div style={{ marginTop: '20px' }}>
                {arry.map((item, index) => (
                    <div key={index} style={{ display: "flex" }}>
                        <div>{item.fname}
                        </div>
                        <div style={{marginLeft:"10px"}}>{item.lname}
                        </div>
                        <button onClick={() => handleDelete(index)}>delete</button>
                        <button onClick={() => {
                            settogle(index);
                            setdata(item);
                        }}>edit</button>
                    </div>


                ))}
            </div>
        </div >
    )
}

export default Data
