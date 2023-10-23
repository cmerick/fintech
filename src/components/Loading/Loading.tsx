
const loading: React.CSSProperties = {
  border: 'var(--gap-s) solid var(--color-2)',
  borderRightColor: 'var(--color-4)',
  width: 'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  animation: 'spin 1s infinite'
}

const div: React.CSSProperties = {
  marginTop: 'var(--gap)',
  width: '100%',
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center'
}

const Loading = () => {


  return <div style={div}>
    <div style={loading}></div>
  </div>;
}

export default Loading;