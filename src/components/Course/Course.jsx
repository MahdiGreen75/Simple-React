import PropTypes from 'prop-types'
import DollerIcon from '../../assets/dollar-sign 1.svg'
import BookIcon from '../../assets/book.png'
const Course = ({ handlerCourses, course }) => {
    const { course_title, course_img, description, price, credit_hour } = course;
    return (
        <div>
            {/* course card */}
            <div className='flex flex-col items-start justify-between p-4 rounded-lg w-[95%] h-80 bg-white'>
                <div><img src={course_img} /></div>
                <h1 className='text-sm font-semibold leading-none'>{course_title}</h1>
                <p className='text-xs font-normal'>{description}</p>
                <div className='flex items-center text-xs text-gray-600 font-bold text-center'>
                    <img src={DollerIcon} className='w-4'/>
                    <span className='mr-3'>Price: {price}</span>
                    <img src={BookIcon} className='w-4'/>
                    <span className='ml-1'>Credit: {credit_hour} hr</span>
                </div>
                <button onClick={()=>handlerCourses(course)} className='w-full py-1
                    font-bold
                    rounded-md
                  bg-blue-500
                  hover:bg-blue-600
                  text-white'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    handlerCourses: PropTypes.func,
    course: PropTypes.object,
}

export default Course;


