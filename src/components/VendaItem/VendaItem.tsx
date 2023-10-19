import VendaDto from '../../models/Vendas/vendas.dto';



const VendaItem = ({venda}: {venda: VendaDto}) => {
  return <div className='venda box'>
    <a href="" style={{fontFamily: "monospace"}}>{venda.id}</a>
    <div>{venda.nome}</div>
    <div>{venda.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</div>
  </div>;
}

export default VendaItem;