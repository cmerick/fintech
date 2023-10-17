import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & 
{
  titulo: string;
}

const Button = ({titulo, ...rest }: ButtonProps) => {
  return (
    <button style={{margin: '1rem'}} {...rest}>
      {titulo}
    </button>
  );
};

export default Button;
