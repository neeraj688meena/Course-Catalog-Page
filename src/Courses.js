import React from 'react'
import CourseCard from './CourseCard'
import './Courses.css'
function Courses() {
    return (
        <div className="courses">
            <h2>Courses</h2>
            <div className="courses__card">
                <CourseCard
                   title="Course 1"
                   instruter="prof A"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 2"
                   instruter="prof B"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 3"
                   instruter="prof C"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 4"
                   instruter="prof D"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 5"
                   instruter="prof E"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 6"
                   instruter="prof F"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 7"
                   instruter="prof A"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />
                <CourseCard
                   title="Course 8"
                   instruter="prof C"
                   description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                   registration="pre-registration"
                   start_date="March 18"
                   end_date="Aug 19"
                   completed="22 week course"
                   duration="4 hrs per day"
                />

            </div>
        </div>
    )
}

export default Courses
