import React, { createContext, useContext, useEffect, useState } from "react";
import { UserDto } from "../models/User/user.dto";
import useFetch from "./useFetch";

interface IUserContext{
  data: UserDto[] | null;
  loading: boolean;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUsers = () => {
    const context = useContext(UserContext);
    if (context === null) throw new Error('userContext must be called inside Provider');
    return context;
}

export const UserContextProvider = ({children}: React.PropsWithChildren) => {
  const {data, loading, error} = useFetch<UserDto[]>('https://data.origamid.dev/usuarios');
  return <UserContext.Provider value={{data, loading}}>{children}</UserContext.Provider>
}