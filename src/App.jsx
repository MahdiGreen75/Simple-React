
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


function App() {
  const [handleCourse, setHandleCourse] = useState([]);

  const handlerCourses = (course) => {
    if (handleCourse.includes(course)) {
      toast.error("You can't register same course twice.");
      return;
    }
    setHandleCourse([...handleCourse, course]);
  }

  return (
    <>
      <div className='lg:max-w-5xl mx-auto'>
        <Toaster
        />
        <header className='text-2xl font-bold text-center my-4'>Course Registration</header>
        {/* <button onClick={()=>{toast.error("This didn't work.")}}>click</button> */}

        <div className='flex'>
          <Courses handlerCourses={handlerCourses}></Courses>
          <Cart handleCourse={handleCourse}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
