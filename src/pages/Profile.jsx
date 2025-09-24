import React from 'react';
import { useAuth } from '../context/AuthContext';
export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Your Profile</h1>
      <p><strong>Email:</strong> {user?.sub}</p>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Token expiry:</strong> {user?.exp ? new Date(user.exp * 1000).toLocaleString() : '—'}</p>
    </div>
  );
}