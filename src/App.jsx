
import './App.css'
import toast, { Toaster } from 'react-hot-toast';



function App() {


  return (
    <>
      <div>
        <Toaster />
      </div>
      <h1 className='text-3xl font-bold text-center my-4'>Course Registration</h1>
      {/* <button onClick={()=>{toast.error("This didn't work.")}}>click</button> */}
    </>
  )
}

export default App
