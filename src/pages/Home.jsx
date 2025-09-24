import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <section>
      <div className="hero">
        <div>
          <h1>Learn with the best courses online</h1>
          <p>Practical, updated courses to boost your career.</p>
          <Link to="/courses" className="btn">Browse Courses</Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop"
          alt="learning"
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <h2>Top categories</h2>
        <div className="grid">
          <div className="card">Web Dev</div>
          <div className="card">Data Science</div>
          <div className="card">Mobile</div>
          <div className="card">Design</div>
        </div>
      </div>
    </section>
  );
}