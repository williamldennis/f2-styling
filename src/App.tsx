import { useState } from 'react'
import './App.css'
import { clsx } from 'clsx';


function Task() {
  const [checked, setChecked] = useState(false)

  const handleCheckBox = () => {
    console.log("clicked");

    setChecked(prev => !prev)
    console.log({ checked })

    return checked

  }

  const taskBodyUnchecked = clsx(
    'm-10 flex flex-row border-1 border-task-border h-18 max-w-sm bg-white rounded-lg items-center'
  )

  const taskBodyChecked = clsx(
    'm-10 flex flex-row border-1 border-task-border h-18 max-w-sm bg-body-checked rounded-lg items-center'
  )

  const taskBoxChecked = clsx(
    'w-6 h-6 rounded-lg bg-box-checked ml-5'
  )

  const taskBoxUnchecked = clsx(
    'border w-6 h-6 rounded-lg border-box-unchecked-border ml-5'
  )

  return (
    <>
      <div className='bg-gray-200 h-screen w-screen absolute'>
        <div className={checked ? taskBodyUnchecked : taskBodyChecked}>
          <button
            className={checked ? taskBoxUnchecked : taskBoxChecked}
            onClick={() => handleCheckBox()}
          />
          <div className='p-4 '>
            <p className='font-[inter] font-light'>
              Sweep the Kitchen
            </p>
            <p className='font-[inter] text-xs text-body font-light mt-1'>
              Get under the cabinets, do a good job
            </p>
          </div>
        </div>
      </div>

    </>

  )
}


function App() {
  return (
    <>
      <div>
        <Task />
      </div>

    </>
  )
}

export default App
