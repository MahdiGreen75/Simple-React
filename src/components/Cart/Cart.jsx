import PropTypes from 'prop-types'
import CartItems from '../CartItems/CartItems';

const Cart = ({ handleCourse, credit, totalPrice }) => {
    let remainingHour = 20 - credit;
    let remainingHourPositive;
    if (remainingHour < 0) {
        remainingHourPositive += remainingHour;
    }
    return (
        <div className="w-1/4">
            {/* cart section */}
            <div className='h-auto p-4 bg-white rounded-md w-[93%] mx-auto'>
                <h1 className="border-b-2 
                text-sm
                border-b-neutral-200 
                pb-2 text-[#2F80ED] font-bold">Credit Hour Remaining {remainingHour < 0 ? remainingHourPositive : remainingHour} hr</h1>
                <p className='font-bold text-sm'>Course Name</p>

                <ol className='list-decimal list-inside'>
                    {
                        handleCourse.map((course, index) => {

                            return (
                                <CartItems credit={credit} course={course} key={index}></CartItems>
                            )
                        })
                    }
                </ol>
                <div className='mt-4 mb-1 border-b-2 border-b-neutral-200'></div>
                <p className='font-normal text-sm'>Total Credit Hour: {credit}</p>
                <div className='mt-4 mb-1 border-b-2 border-b-neutral-200'></div>
                <p className='font-normal text-sm'>Total Price: {totalPrice} USD</p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    handleCourse: PropTypes.array,
    credit: PropTypes.number,
    totalPrice: PropTypes.number

}

export default Cart;