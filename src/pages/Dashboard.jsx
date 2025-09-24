import React from 'react';
import { useAuth } from '../context/AuthContext';
export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name || user?.sub}</p>
      <p>Here you can see your purchased courses and stats (demo).</p>
    </div>
  );
}