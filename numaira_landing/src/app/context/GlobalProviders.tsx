'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the context value
interface GlobalContextType {
  value: string;
  setValue: (value: string) => void;
}

// Create the context with default values
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

// Create the provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>('default value');

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};
