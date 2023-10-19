interface IInputProps extends React.ComponentProps<'input'> {
  label: string;
}

const defaultStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: 600,
  ...defaultStyle
}

const InputStyle: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...defaultStyle
}

const FormInput = ({label, ...props}: IInputProps) => {
  return (
    <div>
      <label htmlFor="label" style={labelStyle}>{label}</label>
      <input type="text" name={label} id={label} {...props} style={InputStyle}/>
    </div>
  )
}

export default FormInput;