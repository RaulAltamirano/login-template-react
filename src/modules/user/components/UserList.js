import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserList({ users, onSeedUsers }) {
  const navigate = useNavigate();

  // Función para copiar al portapapeles
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copiado al portapapeles');
    }).catch((error) => {
      console.error('Error al copiar:', error);
    });
  };

  // Función para volver a la página anterior
  const goBack = () => navigate(-1);

  return (
    <div >
      <h2 className="text-3xl font-semibold text-center text-primary">Usuarios</h2>

      <button onClick={goBack} className="mb-4 text-sm text-blue-600 hover:underline">
        &larr; Volver
      </button>

      {/* Mensaje y botón cuando no hay usuarios */}
      {users.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No hay usuarios disponibles.</p>
          <button
            onClick={onSeedUsers}
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Crear Usuarios de Prueba
          </button>
        </div>
      ) : (
        // Tabla de usuarios cuando existen
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Usuario</th>
                <th className="py-2 px-4 border-b">Contraseña</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  onCopy={handleCopy}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Componente para una fila individual de usuario
function UserRow({ user, onCopy }) {
  return (
    <tr className="text-center">
      <td className="py-2 px-4 border-b">{user.username}</td>
      <td className="py-2 px-4 border-b">{user.password}</td>
      <td className="py-2 px-4 border-b space-x-2">
        <button
          onClick={() => onCopy(user.username)}
          className="px-3 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Copiar Usuario
        </button>
        <button
          onClick={() => onCopy(user.password)}
          className="px-3 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600"
        >
          Copiar Contraseña
        </button>
      </td>
    </tr>
  );
}

export default UserList;
