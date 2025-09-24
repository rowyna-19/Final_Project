import React from 'react';
export default function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      <div className="grid">
        <div className="card">
          <h3>Basic</h3>
          <p>$9 / month</p>
        </div>
        <div className="card">
          <h3>Pro</h3>
          <p>$29 / month</p>
        </div>
        <div className="card">
          <h3>Team</h3>
          <p>$99 / month</p>
        </div>
      </div>
    </div>
  );
}