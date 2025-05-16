import { createContext, useContext } from 'react';

export const DropdownContext = createContext<{ closeDropdown: () => void } | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within DropdownContext.Provider");
  }
  return context;
};
