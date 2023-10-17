import React, { useContext, useState } from "react";

interface IUiContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;

}

export const UiContext = React.createContext<IUiContext>({} as IUiContext);

export const useUi = () => {
  const context = useContext(UiContext);
  return context;
}

export const UiContextProvider = ({children}: React.PropsWithChildren) => {
  const [dark, setDark] = useState(false);
  return <UiContext.Provider value={{dark, setDark}}>{children}</UiContext.Provider>
}

