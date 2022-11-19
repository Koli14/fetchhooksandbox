import React, { useState } from 'react';
import './App.css';
import { UserDetail } from './UserDetail';

function App() {
  const users = ['react', 'redux', 'remix'];
  const [selectedUser, setSelectedUser] = useState();
  return (
    <div className="App">
      {users.map((user) => (
        <div key={user} onClick={() => setSelectedUser(user)}>
          {user}
        </div>
      ))}
      {selectedUser && <UserDetail selectedUser={selectedUser} />}
    </div>
  );
}

export default App;
