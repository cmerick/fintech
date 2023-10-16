
type ButtonProps = React.ComponentProps<'button'> & {size?: string;};


const Button = ({size, ...rest}: ButtonProps) => {
  return(
    <button style={{fontSize: size}} {...rest}/>
  )
}

export default Button;