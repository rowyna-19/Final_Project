import React from 'react';
import { Link } from 'react-router-dom';
function CourseCard({ course }) {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.title} loading="lazy" />
      <h3>{course.title}</h3>
      <p>{course.short}</p>
      <div className="card-footer">
        <span>${course.price}</span>
        <Link to={`/courses/${course.id}`}>View</Link>
      </div>
    </article>
  );
}
export default React.memo(CourseCard);