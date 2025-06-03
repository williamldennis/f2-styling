import { useState } from 'react'
import './App.css'
import Task, { type TaskProps } from './components/Task';
import { clsx } from 'clsx';


const taskList = [
  {
    "id": 1,
    "title": "Dishwashing",
    "body": "Wash and dry dishes, pots, pans, and utensils"
  },
  {
    "id": 2,
    "title": "Laundry",
    "body": "Wash, dry, fold, and put away clothes and linens."
  },
  {
    "id": 3,
    "title": "Vacuuming",
    "body": "Vacuum carpets, rugs, and floors throughout the house."
  },
  {
    "id": 3,
    "title": "Dusting",
    "body": "Dust furniture, shelves, and other surfaces"
  },
  {
    "id": 4,
    "title": "Sweep the Kitchen",
    "body": "Get under the cabinets, do a good job"
  }
]


function TaskList() {
  return (
    <>
      <Task
        id={taskList[0].id}
        title={taskList[0].title}
        body={taskList[0].body}
      />
      <Task
        id={taskList[1].id}
        title={taskList[1].title}
        body={taskList[1].body}
      />
      <Task
        id={taskList[2].id}
        title={taskList[2].title}
        body={taskList[2].body}
      />
      <Task
        id={taskList[3].id}
        title={taskList[3].title}
        body={taskList[3].body}
      />
    </>
  )
}


function App() {
  return (
    <>
      <div className='bg-gray-200 h-screen w-screen absolute flex justify-center'>
        <div>
          <div className='m-6'>Task</div>
          <Task
            id={taskList[4].id}
            title={taskList[4].title}
            body={taskList[4].body}
          />
          <div className='m-6'>Task List</div>
          <TaskList />
        </div>
      </div>


    </>
  )
}

export default App
