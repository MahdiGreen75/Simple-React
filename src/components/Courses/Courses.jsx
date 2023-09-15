import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handlerCourses}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    courses.map(course => <Course handlerCourses={handlerCourses} course={course} key={course.id}></Course>)
                }
            </div>

        </div>
    );
};

Courses.propTypes = {
    handlerCourses: PropTypes.func,
}

export default Courses;