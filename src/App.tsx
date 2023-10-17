import Header from "./components/Header";
import { UiContextProvider } from "./hooks/UiContext";



function App() {
 

  return (
    <UiContextProvider>
      <Header/>
    </UiContextProvider>

  );
}

export default App;


/* 
usando useFetch

  const link = 'https://data.origamid.dev/produtos';

 const [id, setId] = useState('p001');
  const produtos = useFetch<ProdutosDto[]>(link);
  const produto = useFetch<ProdutosDto>(`${link}/${id}`);


<div className="flex">
      <div>
        {produtos.data && produtos.data.map(produto => {
          return (
            <button key={produto.id} onClick={() => setId(produto.id)}>{produto.id}</button>
          )
        })}
      </div>
      <div>
        {produto.loading && <div>loading...</div>}
        {produto.data && 
          <ul>
            <li><b>ID:</b> {produto.data.id}</li>
            <li><b>Nome:</b> {produto.data.nome}</li>
            <li><b>Descrição:</b> {produto.data.descricao}</li>
            <li><b>Preço:</b> R${produto.data.preco.toFixed(2)}</li>
            <li><b>Quantidade:</b> {produto.data.quantidade}</li>
            <li><b>Compra Internacional:</b> {`${produto.data.internacional}`}</li>
          </ul>
        }
      </div>
    </div>
*/