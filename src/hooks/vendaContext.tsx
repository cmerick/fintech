import React, { Dispatch, createContext, useContext, useState } from "react";
import useFetch from "./useFetch";
import VendaDto from "../models/Vendas/vendas.dto";

interface IVendasContext{
  data: VendaDto[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  setInicio: Dispatch<React.SetStateAction<string>>;
  fim: string;
  setFim: Dispatch<React.SetStateAction<string>>;
}

const VendaContext = createContext<IVendasContext | null>(null);

export const useVendas = () => {
    const context = useContext(VendaContext);
    if (!context) throw new Error('userContext must be called inside Provider');
    return context;
}

const getDate = (n: number = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}



export const VendasContextProvider = ({children}: React.PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(30));
  const [fim, setFim] = useState(getDate());
  const {data, loading, error} = useFetch<VendaDto[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`);

  return <VendaContext.Provider value={{data, loading, error, inicio, setInicio, fim, setFim}}>{children}</VendaContext.Provider>
}