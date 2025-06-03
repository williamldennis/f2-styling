import './App.css'
import TaskList from './components/TaskList';
import MessageList from './components/MessageList';

function App() {
  return (
    <>
      <div className='bg-gray-200 h-screen w-screen absolute flex justify-center'>
        <div>
          <div className='m-6'>Task List</div>
          <TaskList />
          <div className='m-6'>Messages</div>
          <MessageList />
        </div>
      </div>


    </>
  )
}

export default App
