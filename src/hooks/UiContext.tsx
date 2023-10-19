import React, { createContext, useContext, useState } from "react";

interface IUiContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;

}

const UiContext = createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = useContext(UiContext);
  if(context === null) throw new Error('useContext must be called inside Provider');
  return context;
}

export const UiContextProvider = ({children}: React.PropsWithChildren) => {
  const [dark, setDark] = useState(false);
  return <UiContext.Provider value={{dark, setDark}}>{children}</UiContext.Provider>
}

