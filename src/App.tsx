import './App.css'
import TaskList from './components/TaskList';
import MessageList from './components/MessageList';

function App() {
  return (
    <>
      <div className='bg-gray-800 p-10 w-screen absolute flex justify-center'>
        <div className='w-full'>
          <div className='mb-12 mt-12 text-white'>Task List</div>
          <TaskList />
          <div className='mb-12 mt-12 text-white'>Messages</div>
          <MessageList />
        </div>
      </div>


    </>
  )
}

export default App
