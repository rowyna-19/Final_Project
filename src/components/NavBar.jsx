import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav className="nav">
      <div className="brand">
        <Link to="/"><strong>CourseShop</strong></Link>
      </div>
      <div className="links">
        <Link to="/courses">Courses</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="btn-link">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}