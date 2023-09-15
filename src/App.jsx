import { useState } from 'react';
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';


function App() {
  const [handleCourse, setHandleCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
 


  const handlerCourses = (course) => {
    if (handleCourse.includes(course)) {
      toast.error("You can't register same course twice.");
      return;
    }
    
    let changedCredit = credit + course.credit_hour;
    let changedTotalPrice = totalPrice + course.price;
    if (changedCredit > 20) {
      toast.error("Maximum credit hour exceeded.");
      return;
    }
   
    setCredit(changedCredit);
    setHandleCourse([...handleCourse, course]);
    setTotalPrice(changedTotalPrice);
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
          <Cart handleCourse={handleCourse} totalPrice={totalPrice} credit={credit}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
