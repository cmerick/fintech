import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import VendaDto from "../../models/Vendas/vendas.dto";

interface VendaDia {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

const transformData = (data: VendaDto[]): VendaDia[] => {
  const dias = data.reduce((acc: {[key: string]:VendaDia}, item) => {
    const dia = item.data.split(' ')[0];
    if(!acc[dia]) {
      acc[dia]  = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0
      };
      
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map(dia =>({...dia, data: dia.data.substring(5)}));
}

const Grafico = ({data}: {data: VendaDto[]}) => {

    const transformedData = transformData(data);
  console.log(transformedData)

  return (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
    width={500}
    height={300}
    data={transformedData}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <XAxis dataKey="data"/>
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="falha" stroke="#f73535" strokeWidth={3} />
    <Line type="monotone" dataKey="processando" stroke="#ffe600" strokeWidth={3} />
    <Line type="monotone" dataKey="pago" stroke="#04ff3b" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
);
}

export default Grafico;