import { useState } from 'react'
import './App.css'

function Task() {
  return (
    <>
      <div className='bg-gray-800 h-screen w-screen absolute'>
        <div className='m-10 flex flex-row border-2 h-18 max-w-sm bg-white rounded-lg items-center'>
          <button className='border w-6 h-6 rounded-lg border-box-unchecked-border ml-5' />
          <div className='p-4 '>
            <p className='font-[inter]'>
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
