import { configureStore } from '@reduxjs/toolkit'
import  AddTaskReducer  from './AddTask'
export const store = configureStore({
  reducer: {
    addTask:AddTaskReducer
  },
})