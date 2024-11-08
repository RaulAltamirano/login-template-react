import React, { useState } from 'react';
import UserList from '../components/UserList';

// Función para crear usuarios de prueba
const seedUsers = () => ([
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  { id: 3, username: 'user3', password: 'password3' },
]);

function UserPage() {
  const [users, setUsers] = useState([]);

  // Función que crea usuarios de prueba
  const handleSeedUsers = () => {
    setUsers(seedUsers());
  };

  return (
    <UserList users={users} onSeedUsers={handleSeedUsers} />
  );
}

export default UserPage;
