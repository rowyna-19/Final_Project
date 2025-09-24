import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const DB = {
  '1': { id: '1', title: 'React for Beginners', desc: 'Full React course...', image: 'https://images.unsplash.com/photo-1526378720851-3d6f3b6c8f75?w=1200&q=80&auto=format&fit=crop' },
  '2': { id: '2', title: 'Python Data Science', desc: 'Pandas, NumPy, ML...', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80&auto=format&fit=crop' },
  '3': { id: '3', title: 'Flutter Mobile Apps', desc: 'Build cross-platform apps', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop' },
  '4': { id: '4', title: 'UI/UX Design', desc: 'Design workflows & UI', image: 'https://images.unsplash.com/photo-1523768162454-0f2b8b4b08b0?w=1200&q=80&auto=format&fit=crop' }
};
export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    setCourse(DB[id] || null);
  }, [id]);

  if (!course) return <div>Course not found</div>;
  return (
    <div>
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} style={{ maxWidth: 800, width: '100%' }} />
      <p>{course.desc}</p>
    </div>
  );
}