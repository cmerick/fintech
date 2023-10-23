import Grafico from '../../components/Grafico/Grafico';
import { useVendas } from '../../hooks/vendaContext';


const Resumo = () => {
  const {data} = useVendas();

  if (!data) return null;

  return <section>
    <div className='resumo flex mb'>
    <div className='box'>
        <h2>Vendas</h2>
        <span>
          {data
          .filter((i) => i.status !== 'falha')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
      <div className='box'>
        <h2>Recebidos</h2>
        <span>
          {data
          .filter((i) => i.status === 'pago')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
      <div className='box'>
        <h2>Processando</h2>
        <span>
          {data
          .filter((i) => i.status === 'processando')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
    </div>
    <div className='box mb'>
            <Grafico data={data}/>
    </div>
  </section>;
}

export default Resumo;