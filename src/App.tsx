import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";


function App() {
  const [date, setDate] = useState('');

  return (
    <div>
     react {date}
     <Input label="Teste" id="teste" type="email"/>
     <Input value={date} onChange={(event) => setDate(event.currentTarget.value)} label="Teste" id="teste" type="date" />
     <Input label="Teste" id="teste" type="time"/>
     
    </div>
  )
}

export default App
