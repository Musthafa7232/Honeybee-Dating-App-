import { createContext, useState } from 'react';

export const context = createContext();

export default function ContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState({});
  
  return (
    <context.Provider value={[userDetails, setUserDetails]}>
      {children}
    </context.Provider>
  );
}