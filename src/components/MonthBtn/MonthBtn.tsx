import { useVendas } from "../../hooks/vendaContext";

const style: React.CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: 600,
  textTransform: 'capitalize'
}

const nomeMes = (n: number): string => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('pt-Br', {month: "long"}).format(date);
}

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

const MonthBtn = ({n}: {n: number}) => {
  const {setInicio, setFim} = useVendas();

  const setMes = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firsDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firsDay));
    setFim(formatDate(lastDay));
  }

  return <button style={style} onClick={() => setMes(n)}>{nomeMes(n)}</button>;
}

export default MonthBtn