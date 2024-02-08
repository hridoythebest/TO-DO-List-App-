import { createSlice } from "@reduxjs/toolkit";

export const AddTaskReducer = createSlice({
    name:'addTask',
    initialState:[],
    reducers:{
        Add:(state,action)=>{
            state.push(action.payload)
        },
        Remove:(state,action)=>{
            return state.filter((addTask,idx)=> idx !== action.payload)
        }
    }
})

export const {Add,Remove}= AddTaskReducer.actions

export default AddTaskReducer.reducer