import React, { useState, useEffect, useCallback } from 'react';
import CourseCard from '../components/CourseCard';
const SAMPLE = [
  { id: '1', title: 'React for Beginners', short: 'Build modern web apps', price: 29, image: 'https://images.unsplash.com/photo-1526378720851-3d6f3b6c8f75?w=800&q=60&auto=format&fit=crop' },
  { id: '2', title: 'Python Data Science', short: 'Pandas, NumPy, ML basics', price: 39, image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=60&auto=format&fit=crop' },
  { id: '3', title: 'Flutter Mobile Apps', short: 'Cross-platform apps', price: 35, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=60&auto=format&fit=crop' },
  { id: '4', title: 'UI/UX Design', short: 'Design beautiful interfaces', price: 25, image: 'https://images.unsplash.com/photo-1523768162454-0f2b8b4b08b0?w=800&q=60&auto=format&fit=crop' }
];
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const timer = setTimeout(() => {
      if (mounted) {
        setCourses(SAMPLE);
        setLoading(false);
      }
    }, 600);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);
  const renderList = useCallback(() => {
    return courses.map(c => <CourseCard key={c.id} course={c} />);
  }, [courses]);
  return (
    <section>
      <h1>All Courses</h1>
      {loading ? <div>Loading courses...</div> : <div className="courses-grid">{renderList()}</div>}
    </section>
  );
}