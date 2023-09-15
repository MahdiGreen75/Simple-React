
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';


function App() {


  return (
    <>
      <div>
        <Toaster />
      </div>
      <header className='text-2xl font-bold text-center my-4'>Course Registration</header>
      {/* <button onClick={()=>{toast.error("This didn't work.")}}>click</button> */}

      <div className='flex'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
