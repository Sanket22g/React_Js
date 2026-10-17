import React, { useState } from 'react';
import UserContext from './UserContext';

// Step 2: Create the Context Provider Component
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
