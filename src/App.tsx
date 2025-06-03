import { useState } from 'react'
import './App.css'
import Task, { type TaskProps } from './components/Task';

export type TaskData = {
  id: number,
  title: string,
  body: string,
  checked: boolean
}

const taskList: TaskData[] = [
  {
    "id": 1,
    "title": "Dishwashing",
    "body": "Wash and dry dishes, pots, pans, and utensils",
    "checked": false
  },
  {
    "id": 2,
    "title": "Laundry",
    "body": "Wash, dry, fold, and put away clothes and linens.",
    "checked": false
  },
  {
    "id": 3,
    "title": "Vacuuming",
    "body": "Vacuum carpets, rugs, and floors throughout the house.",
    "checked": false
  },
  {
    "id": 4,
    "title": "Dusting",
    "body": "Dust furniture, shelves, and other surfaces",
    "checked": false
  }
]

function TaskList() {
  const [tasks, setTasks] = useState(taskList)
  const sortedTasks = [...tasks].sort((a, b) => Number(a.checked) - Number(b.checked));

  const handleCheckBox = (id: number) => {
    console.log("clicked");

    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task)
    )
  }

  return (
    <>
      <Task
        data={sortedTasks[0]}
        handleCheckBox={handleCheckBox}
      />
      <Task
        data={sortedTasks[1]}
        handleCheckBox={handleCheckBox}
      />
      <Task
        data={sortedTasks[2]}
        handleCheckBox={handleCheckBox}
      />
      <Task
        data={sortedTasks[3]}
        handleCheckBox={handleCheckBox}
      />
    </>
  )
}


function App() {
  return (
    <>
      <div className='bg-gray-200 h-screen w-screen absolute flex justify-center'>
        <div>
          <div className='m-6'>Task List</div>
          <TaskList />
        </div>
      </div>


    </>
  )
}

export default App
