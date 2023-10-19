import FormInput from '../Input/FormInput';
import { useVendas } from '../../../hooks/vendaContext';

const FormLayout = () => {
  const {inicio, setInicio, fim, setFim} = useVendas();
  return (
    <form onSubmit={(e) => e.preventDefault()} className='box flex'>
      <FormInput label='Data inicial: ' type='date' value={inicio} onChange={({target}) => setInicio(target.value)}/>
      <FormInput label='Data final: ' type='date' value={fim} onChange={({target}) => setFim(target.value)}/>
    </form>
  );
}

export default FormLayout;