export default interface VendaDto{
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartão';
  parcelas: number | null;
  data: string;
}