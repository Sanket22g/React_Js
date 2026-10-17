import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  // Access the user state directly from UserContext
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div className="card profile-card empty">
        <p>🔒 No active session. Please log in above.</p>
      </div>
    );
  }

  return (
    <div className="card profile-card active">
      <h2>👤 Profile (From Context)</h2>
      <p className="welcome-msg">
        Welcome, <strong>{user.username}</strong>! 🎉
      </p>
      <p className="status-badge">Authenticated via Context API</p>
      <button 
        type="button" 
        className="btn-logout" 
        onClick={() => setUser(null)}
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
