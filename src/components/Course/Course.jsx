import PropTypes from 'prop-types'
import DollerIcon from '../../assets/dollar-sign 1.svg'
import BookIcon from '../../assets/book.png'
const Course = ({ course }) => {
    const { id, course_title, course_img, description, price, credit_hour } = course;
    return (
        <div>
            {/* course card */}
            <div className='flex flex-col items-center justify-between p-2'>
                <div><img src={course_img} /></div>
                <h1 className='text-xl font-semibold leading-none'>{course_title}</h1>
                <p className='text-left text-sm font-light'>{description}</p>
                <div className='flex items-center text-base text-gray-600 font-medium'>
                    <img src={DollerIcon} />
                    <span className='mr-3'>Price: {price}</span>
                    <img src={BookIcon} />
                    <span className='ml-1'>Credit: {credit_hour}</span>
                </div>
                <button className='w-full py-1
                    rounded-md
                  bg-blue-500
                  hover:bg-blue-600
                  text-white'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
}

export default Course;


// "id": 8407,
//       "course_title": "Introduction to OOP Python",
//       "course_img": "https://i.ibb.co/ts9n1Jt/Rectangle-2.png",
//       "description": "Discover Python's object-oriented programming capabilities. Create reusable and efficient code using Python.",
//       "price": 10000,
//       "credit_hour": 5