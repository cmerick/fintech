import VendaItem from '../../components/VendaItem/VendaItem';
import { useVendas } from '../../hooks/vendaContext';

const Vendas = () => {
  const {data} = useVendas();

  if(!data) return null;
  return <ul>
    {data.map(venda => 
      (<li key={venda.id}><VendaItem venda={venda}/></li>)
    )}
  </ul>;
}

export default Vendas;