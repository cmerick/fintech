import { useState } from 'react';
import FormLayout from '../Form/Layout/FormLayout';
import MonthBtnLayout from '../MonthBtnLayout/MonthBtnLayout';



const Header = () => {
  const [title, setTitle] = useState('Resumo');
  return <header className='mb'>
    <div className='daterange mb'>
    <FormLayout/>
    <h1 className='box bg-3'>{title}</h1>
    </div>
    <MonthBtnLayout/>
  </header>;
}

export default Header;