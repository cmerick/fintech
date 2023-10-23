import { useEffect, useState } from 'react';
import FormLayout from '../Form/Layout/FormLayout';
import MonthBtnLayout from '../MonthBtnLayout/MonthBtnLayout';
import { useLocation } from 'react-router-dom';



const Header = () => {
  const [title, setTitle] = useState('Resumo');

  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        document.title = 'Fintech | Resumo';
        return setTitle(() => 'Resumo')
      case '/vendas':
        document.title = 'Fintech | Vendas';
        return setTitle(() => 'Vendas')
      case '/venda/:id':
        document.title = 'Fintech | Venda';
        return setTitle(() => 'Vendas')
      default:
        document.title = 'Fintech | Resumo';
        return setTitle(() => 'Resumo')
    }
    
  }, [location]);

  return <header className='mb'>
    <div className='daterange mb'>
    <FormLayout/>
    <h1 className='box bg-3'>{title}</h1>
    </div>
    <MonthBtnLayout/>
  </header>;
}

export default Header;