import React from "react"

interface State{
  nome: string;
  email: string;
  idade: number;
}

type Action = { type: 'setNome'; payload: string;} | {type: 'setEmail', payload: string;} | {type: 'setAge', payload: number;};

const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'setEmail':
      return({...state, email: action.payload,});
    case 'setNome':
      return({...state, nome: action.payload,});
    case 'setAge':
      return({...state, idade: action.payload,});
    default: return state;
  }
}

export const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, {} as State);

  return <div>
    <Input label={`Nome: ${state.nome ? state.nome : ''}`} type="text" value={state.nome} onChange={({target}) => dispatch({type: 'setNome', payload: target.value})}/>
    <Input label={`Email: ${state.email ? state.email : ''}`} type="text" value={state.email} onChange={({target}) => dispatch({type: 'setEmail', payload: target.value})}/>
  </div>
}