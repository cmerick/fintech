import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidenav from "./components/Sidenav/Sidenav";
import { VendasContextProvider } from "./hooks/vendaContext";
import Resumo from "./pages/Resumo/Resumo";
import Vendas from "./pages/Vendas/Vendas";
import Venda from "./pages/Venda/Venda";



function App() {


  return (
    <BrowserRouter>
      <VendasContextProvider>
      <div className="container">
      <Sidenav/>
      <main>
        <Header/>
      <Routes >
        <Route path="/" element={<Resumo/>}/>
        <Route path="/vendas" element={<Vendas/>}/>
        <Route path="/vendas/:id" element={<Venda/>}/>
      </Routes>
      </main>
    </div>
    </VendasContextProvider>
    </BrowserRouter>
  );
}

export default App;