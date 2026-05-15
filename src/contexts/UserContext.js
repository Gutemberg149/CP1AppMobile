import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    nome: '',
    curso: '',
    disciplina: '',
    descricao: '',
    cep: '',
    endereco: '',
    foto: null,
  });

  const updateUserData = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}