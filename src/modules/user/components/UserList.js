import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCopy, FaSpinner, FaExclamationTriangle } from 'react-icons/fa'; // Importar iconos
import axiosInstance from '../../auth/instance/axiosInstance';

// Componente para la lista de usuarios
function UserList({ onSeedUsers }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  // Función para cargar usuarios desde el backend
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulamos una llamada al backend con un retraso
      const response = await axiosInstance.get('/user');
      console.log({response})
      const data = await response.data;
      setUsers(data);
    } catch (err) {
      setError('No se pudo cargar la lista de usuarios');
    } finally {
      setLoading(false);
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-semibold text-center text-primary">Usuarios</h2>

      <button onClick={goBack} className="mb-4 text-sm text-blue-600 hover:underline">
        &larr; Volver
      </button>

      {/* Si hay un error, mostrar un mensaje */}
      {error && (
        <div className="text-center text-red-600 mb-4">
          <FaExclamationTriangle className="inline-block mr-2" />
          {error}
        </div>
      )}

      {/* Mensaje y botón cuando no hay usuarios */}
      {users.length === 0 && !loading ? (
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
        // Mostrar la tabla de usuarios cuando los hay
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center">
              <FaSpinner className="animate-spin text-2xl text-gray-600" />
            </div>
          ) : (
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Nombre</th>
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
          )}
        </div>
      )}
    </div>
  );
}

// Componente para una fila individual de usuario
function UserRow({ user, onCopy }) {
  return (
    <tr className="text-center">
      <td className="py-2 px-4 border-b">{user.id}</td>
      <td className="py-2 px-4 border-b">{user.fullName}</td>
    </tr>
  );
}

export default UserList;
