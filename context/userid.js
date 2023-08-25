import React, { createContext, useContext, useState } from 'react';

const ReceivedNumberContext = createContext();

export function ReceivedNumberProvider({ children }) {
  const [receivedNumber, setReceivedNumber] = useState(null);

  return (
    <ReceivedNumberContext.Provider value={{ receivedNumber, setReceivedNumber }}>
      {children}
    </ReceivedNumberContext.Provider>
  );
}

export function useReceivedNumber() {
  return useContext(ReceivedNumberContext);
}
