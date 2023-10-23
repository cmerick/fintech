import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import VendaDto from '../../models/Vendas/vendas.dto';
import Loading from '../../components/Loading/Loading';

interface Venda extends Omit<VendaDto, 'data'> {
}


const Venda = () => {
  const {id} = useParams();

  const {data, loading} = useFetch<Venda>(`https://data.origamid.dev/vendas/${id}`);

  if(loading) {
    return (<Loading/>)
  }
  if(!data) {
    return null;
  }

  return (
    <div>
      <div className='box mb'>ID: {data?.id}</div>
      <div className='box mb'>Nome: {data?.nome}</div>
      <div className='box mb'>Preço: {data?.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className='box mb'>Situação: {data?.status}</div>
      <div className='box mb'>Pagamento: {data?.pagamento}</div>
    </div>
  );
}

export default Venda;