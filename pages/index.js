import React, { useState } from 'react';

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const correctPassword = 'practice growth';

  const handleLogin = () => {
    if (inputPassword.toLowerCase().trim() === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect passphrase. Please try again.');
    }
  };

  if (!authenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Access Restricted</h1>
        <p>Please enter the passphrase to explore how energy lawyers grow their practice.</p>
        <input
          type='password'
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder='Enter passphrase'
          style={{ padding: '8px', margin: '12px', border: '1px solid #ccc' }}
        />
        <button onClick={handleLogin} style={{ padding: '8px 16px' }}>Enter</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Where Renewable Energy Lawyers Go to Grow</h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        If your clients are scaling clean power, carbon capture, hydrogen, or renewables infrastructure—you need a platform built for the same momentum.
      </p>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button style={{ padding: '12px 24px', backgroundColor: '#3FB6A8', color: '#fff', border: 'none' }}>Explore the Opportunity</button>
      </div>
    </div>
  );
}
