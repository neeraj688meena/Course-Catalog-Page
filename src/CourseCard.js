import React from 'react'
import './CourseCard.css'

function CourseCard({ title, instruter, description, registration, start_date, end_date, completed, duration }) {
    return (
        <div className="courseCard">
            <div className="first">
                <h2>{title}</h2>
                <h3>{instruter}</h3>
            </div>
            <div className="second">
                <p>{description}</p>
            </div>
            <div className="third">
                <h4>{registration}</h4>
                <p>
                    {start_date} * {end_date}
                </p>
                <p>
                    {completed} , {duration}
                </p>
            </div>
        </div>
    )
}

export default CourseCard
