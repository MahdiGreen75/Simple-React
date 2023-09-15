import PropTypes from 'prop-types'

const CartItems = ({course}) => {
    const {course_title} = course;
    return (
        <>
            <li className='text-xs font-light my-1'>{course_title}</li>
        </>
    );
};

CartItems.propTypes = {
    course: PropTypes.object.isRequired,
}

export default CartItems;