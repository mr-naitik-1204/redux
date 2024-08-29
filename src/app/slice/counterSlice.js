import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    arry: []
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    add: (state,action) => {
      console.log(action);
      state.arry.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.arry.splice(action.payload, 1);
    },
    editItem: (state,action) => {
      console.log(action.payload);
      
      state.arry[action.payload.togle]=action.payload.data
    }

  }
})

export const { increment, decrement, incrementByAmount, setName, add, editItem, deleteItem } = counterSlice.actions

export default counterSlice.reducer