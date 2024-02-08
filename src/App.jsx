import { useState } from 'react'

//react icons
import {AiOutlinePlus} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
//add task modal
import AddTask from './components/AddTask'
//redux
import { useDispatch } from 'react-redux'
import { Remove } from './redux/AddTask'
import { useSelector } from 'react-redux'

function App() {
  const[addTaskModal,setAddTaskModal]=useState(false);
  const tasks = useSelector((state)=>state.addTask)
  const dispatch = useDispatch()
  const removeHandle=(idx)=>{
    dispatch(Remove(idx))
  }
  return (
    <div className="App w-full h-screen flex justify-center items-center">
      <div 
      className='w-4/5 md:w-1/2 lg:w-4/12 2xl:w-1/5 m-auto h-1/2 overflow-auto bg-white rounded-md drop-shadow-xl border relative'>
        <div className='w-full sticky top-0 bg-[#161616] text-gray-200 p-4 flex justify-between items-center'>
          <div>
            <h1 className='text-xl font-semibold'>To Do List App</h1>
            <p className='text-xs'>manage your tasks</p>
          </div>
          <div className='w-8 h-8 bg-white text-black rounded-full flex justify-center items-center'>
            <button>
              <AiOutlinePlus onClick={()=> setAddTaskModal(true)} size={"1rem"}/>
            </button>
          </div>
        </div>

        <div className='p-5 text-black'>
          <ul className='space-y-4'>
            {tasks && tasks.map((task,idx)=>{
              return(
            <div key={idx} className='bg-gray-100 flex justify-between'>
              <li  className='flex space-x-4 p-4'>
                <input type="checkbox" name="" id="complete" className='peer/complete' />
                <label  className='peer-checked/complete:line-through'>{task}</label>
              </li>
              <button onClick={()=>{removeHandle(idx)}}>
                <MdDelete size={"1.5rem"}/>
              </button>
            </div>
              );
            })}
          </ul>
        </div>
      </div>
      {addTaskModal && <AddTask setAddTaskModal={setAddTaskModal}/>}
    </div>
  )
}

export default App
